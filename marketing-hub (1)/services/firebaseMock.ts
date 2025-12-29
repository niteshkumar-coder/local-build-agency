import { Service, BlogPost, Lead } from '../types';
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  updateDoc, 
  doc, 
  deleteDoc,
  Timestamp,
  Firestore
} from "firebase/firestore";

/**
 * Firebase configuration for Local build
 * Preserving the user's specific configuration.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBJU7Jwbs88hJByoqEa2CyNbKDDQqU4CJA",
  authDomain: "local-build-agency.firebaseapp.com",
  projectId: "local-build-agency",
  storageBucket: "local-build-agency.firebasestorage.app",
  messagingSenderId: "68727856700",
  appId: "1:68727856700:web:94d83d4e2fe15ef7a8ed39",
  measurementId: "G-1T2802PFQK"
};

let firestore: Firestore | null = null;

try {
  let app: FirebaseApp;
  // Check if app is already initialized to avoid "duplicate app" errors
  const apps = getApps();
  if (apps.length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = apps[0];
  }
  
  // Initialize Firestore and link it to the app
  firestore = getFirestore(app);
  
  console.log("✅ Firebase Initialized: Firestore is active.");
} catch (e) {
  console.error("❌ Firebase Initialization Error:", e);
}

class FirestoreService {
  private mockLeads: Lead[] = JSON.parse(localStorage.getItem('lb_mock_leads') || '[]');

  async getServices(): Promise<Service[]> {
    if (!firestore) return this.getStaticServices();
    try {
      const snapshot = await getDocs(collection(firestore, 'services'));
      if (snapshot.empty) return this.getStaticServices();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
    } catch (e) {
      console.warn("Firestore service call failed, falling back to static data", e);
      return this.getStaticServices();
    }
  }

  private getStaticServices(): Service[] {
    return [
      { id: '1', title: 'YouTube Growth', description: 'Scale your reach with AI-optimized content.', icon: '📺', category: 'Marketing' },
      { id: '2', title: 'Ad Automation', description: 'Precision targeted campaigns for Local ROI.', icon: '🚀', category: 'Marketing' },
      { id: '3', title: 'AI Solutions', description: 'Custom chatbots and workflow automation.', icon: '🤖', category: 'AI' }
    ];
  }

  async getPosts(): Promise<BlogPost[]> {
    return [
      {
        id: '1',
        title: 'The Future of Local AI',
        excerpt: 'How local businesses are using Gemini to automate customer service.',
        content: 'Full content here...',
        author: 'Rishabh Singh',
        date: 'June 15, 2024',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'future-of-local-ai'
      }
    ];
  }

  async getLeads(): Promise<Lead[]> {
    if (!firestore) return this.mockLeads;
    try {
      const q = query(collection(firestore, 'leads'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return { 
          id: doc.id, 
          ...data,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString()
        } as Lead;
      });
    } catch (e) {
      console.error("Firestore Lead Fetch Error:", e);
      return this.mockLeads;
    }
  }

  async addLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'responded'>): Promise<void> {
    if (!firestore) {
      this.saveLocalLead(leadData);
      return;
    }
    
    try {
      await addDoc(collection(firestore, 'leads'), {
        ...leadData,
        createdAt: Timestamp.now(),
        responded: false
      });
    } catch (e) {
      console.error("❌ Firestore Save Error:", e);
      this.saveLocalLead(leadData);
    }
  }

  private saveLocalLead(leadData: any) {
    const newLead: Lead = {
      ...leadData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      responded: false
    };
    this.mockLeads.unshift(newLead);
    localStorage.setItem('lb_mock_leads', JSON.stringify(this.mockLeads));
  }

  async markLeadResponded(id: string): Promise<void> {
    if (!firestore) {
      this.mockLeads = this.mockLeads.map(l => l.id === id ? { ...l, responded: true } : l);
      localStorage.setItem('lb_mock_leads', JSON.stringify(this.mockLeads));
      return;
    }
    try {
      await updateDoc(doc(firestore, 'leads', id), { responded: true });
    } catch (e) {
      console.error("Error updating lead status:", e);
    }
  }

  async deleteLead(id: string): Promise<void> {
    if (!firestore) {
      this.mockLeads = this.mockLeads.filter(l => l.id !== id);
      localStorage.setItem('lb_mock_leads', JSON.stringify(this.mockLeads));
      return;
    }
    try {
      await deleteDoc(doc(firestore, 'leads', id));
    } catch (e) {
      console.error("Error deleting lead:", e);
    }
  }
}

export const db = new FirestoreService();