
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const LOGO_URL = 'https://i.ibb.co/5hsm0TSy/logo-modified.png';

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/localbuild1',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/localbuild1?igsh=YzljYTk1ODg3Zg==',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@localbuild?si=n9_3FntuX7pfD5Oy',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/NiteshK7765796',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nitesh-kumar-27428a397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg'
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="text-xl font-black text-white">
                Local <span className="text-cyan-400">build</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              Empowering local businesses with high-tier artificial intelligence and growth marketing strategies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/5 p-2 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                >
                  <img 
                    src={social.logoUrl} 
                    alt={social.name} 
                    className="w-full h-full object-contain filter drop-shadow-sm" 
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">YouTube Growth</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Instagram Ads</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">LinkedIn B2B</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Facebook Communities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/blog" className="hover:text-cyan-400 transition-colors">Our Insights</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/admin" className="hover:text-cyan-400 transition-colors">Admin Login</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-bold text-white mb-4 text-sm">Join Our Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4">Get AI & marketing updates for local biz owners.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Email" className="bg-slate-900 border border-white/10 px-3 py-2 rounded-lg text-xs flex-grow outline-none focus:ring-1 focus:ring-cyan-500 text-white" />
              <button className="bg-cyan-500 text-slate-950 px-3 py-2 rounded-lg text-xs font-bold hover:bg-cyan-400 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 font-medium text-center md:text-left">
          <p>© 2024 Local build Marketing Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Powered by Gemini 3.0</span>
            <span className="hidden sm:inline">Made with Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
