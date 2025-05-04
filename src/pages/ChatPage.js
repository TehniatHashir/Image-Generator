
import React from 'react';
import './ChatPage.css';

function ChatPage() {
  return (
    <div className="chat-page">
      <header className="chat-header">
      
       
        <img src="image8.png?text=Bird" alt="Bird" className="header-bird" />
      </header>

      <main className="chat-main">
        
        <h4 className="section-title"><span>UNLEASH AI CREATIVITY</span></h4>
        <h2 className="section-heading">Design Smarter with AI-Powered Brilliance</h2>
        <div className="features-row">
          {[
            { icon: "🤖", title: "Intelligent" },
            { icon: "👁️", title: "Visualization" },
            { icon: "💡", title: "Creativity" },
            { icon: "🎚️", title: "Flexible" }
          ].map((item, i) => (
            <div className="feature-item" key={i}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>Smarter Images with Every Prompt</p>
  
              <div className="arrow">→</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="chat-footer">
        <input type="text" placeholder="Type message" />
        <button>➤</button>
      </footer>
    </div>
  );
}

export default ChatPage;
