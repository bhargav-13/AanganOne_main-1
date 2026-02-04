import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCloseMenu, setShowCloseMenu] = useState(false);
    const [messages, setMessages] = useState([
        { text: "👋 Welcome to Aanganone!\nWe help residential societies manage their communities effortlessly.\nHow can I assist you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowCloseMenu(false);
    };

    const handleCloseClick = () => {
        setShowCloseMenu(!showCloseMenu);
    };

    const handleClearConversation = () => {
        setMessages([{ text: "👋 Welcome to Aanganone!\nWe help residential societies manage their communities effortlessly.\nHow can I assist you today?", sender: 'bot' }]);
        setShowCloseMenu(false);
    };

    const handleCloseChat = () => {
        setIsOpen(false);
        setShowCloseMenu(false);
    };

    const handleCancel = () => {
        setShowCloseMenu(false);
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await fetch('https://n8n.codelixitsolutions.com/webhook/AangannoneChatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Get the response as text first
            const responseText = await response.text();
            let botText = "Received";

            // Try to parse as JSON to extract the actual message
            try {
                const data = JSON.parse(responseText);

                // Extract text from various possible JSON structures
                if (typeof data === 'object' && data !== null) {
                    // Check common response field names
                    botText = data.output || data.message || data.text || data.response ||
                        data.reply || data.answer || data.content || data.result;

                    // If still an object, try to get the first string value
                    if (typeof botText === 'object') {
                        const values = Object.values(data);
                        botText = values.find(v => typeof v === 'string') || JSON.stringify(data);
                    }
                } else if (typeof data === 'string') {
                    botText = data;
                }
            } catch (e) {
                // If it's not JSON, use the text directly
                botText = responseText;
            }

            // Ensure we have a string
            if (typeof botText !== 'string') {
                botText = String(botText);
            }

            // Clean up any remaining JSON formatting
            botText = botText.trim();

            // Convert **text** markdown to <strong>text</strong> HTML tags
            // This ensures ** symbols are removed and text is properly bolded
            botText = botText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

            // Convert emails to Gmail links
            const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
            botText = botText.replace(emailRegex, (email) => {
                return `<a href="mailto:${email}" target="_blank" rel="noopener noreferrer">${email}</a>`;
            });

            // Convert phone numbers to WhatsApp links
            // Matches formats like: +91 9429269295, +919429269295, 9429269295, etc.
            const phoneRegex = /(\+?\d{1,3}[\s-]?\d{10}|\+?\d{12,13})/g;
            botText = botText.replace(phoneRegex, (phone) => {
                // Remove spaces and dashes for WhatsApp link
                const cleanPhone = phone.replace(/[\s-]/g, '');
                // Ensure it starts with + for international format
                const whatsappNumber = cleanPhone.startsWith('+') ? cleanPhone : `+${cleanPhone}`;
                return `<a href="https://wa.me/${whatsappNumber.replace('+', '')}" target="_blank" rel="noopener noreferrer">${phone}</a>`;
            });

            // Convert URLs to clickable links
            // Matches http://, https://, and www. URLs but excludes HTML tags and special chars
            const urlRegex = /(https?:\/\/[^\s<>"]+?)(?=\s|<|$)|(www\.[^\s<>"]+?)(?=\s|<|$)/g;
            botText = botText.replace(urlRegex, (url) => {
                // Remove trailing punctuation that might be part of sentence
                const cleanUrl = url.replace(/[.,;:!?]+$/, '');
                // Add https:// if URL starts with www.
                const href = cleanUrl.startsWith('www.') ? `https://${cleanUrl}` : cleanUrl;
                return `<a href="${href}" target="_blank" rel="noopener noreferrer">${cleanUrl}</a>`;
            });


            setMessages(prev => [...prev, { text: botText, sender: 'bot' }]);


        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting right now.", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    // Format message to handle numbered lists, bullet points, headings, and HTML
    const formatMessage = (text) => {
        if (!text) return null;

        // Check if the text contains HTML tags
        const hasHTML = /<[^>]+>/.test(text);

        if (hasHTML) {
            // If it contains HTML, render it as HTML (sanitized)
            return (
                <div
                    dangerouslySetInnerHTML={{ __html: text }}
                    style={{ lineHeight: '1.6' }}
                />
            );
        }

        // Helper function to process **bold** markdown in any text
        const processBoldMarkdown = (textLine) => {
            // Check if there are any **bold** patterns
            if (!textLine.includes('**')) {
                return textLine;
            }

            const parts = [];
            let currentText = textLine;
            let key = 0;

            // Process all **bold** patterns in the text
            while (currentText.includes('**')) {
                const startIndex = currentText.indexOf('**');
                const endIndex = currentText.indexOf('**', startIndex + 2);

                if (endIndex === -1) {
                    // No closing **, treat remaining as regular text
                    parts.push(<span key={key++}>{currentText}</span>);
                    break;
                }

                // Add text before **
                if (startIndex > 0) {
                    parts.push(<span key={key++}>{currentText.substring(0, startIndex)}</span>);
                }

                // Add bold text (without the **)
                const boldText = currentText.substring(startIndex + 2, endIndex);
                parts.push(<strong key={key++}>{boldText}</strong>);

                // Continue with remaining text
                currentText = currentText.substring(endIndex + 2);
            }

            // Add any remaining text
            if (currentText.length > 0) {
                parts.push(<span key={key++}>{currentText}</span>);
            }

            return parts.length > 0 ? parts : textLine;
        };

        // Otherwise, use the existing markdown-style formatting
        // Split by line breaks
        const lines = text.split('\n');
        const elements = [];

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) {
                // Empty line - add spacing
                elements.push(<br key={`br-${index}`} />);
                return;
            }

            // Check for numbered list (1. 2. 3. etc)
            const numberedMatch = trimmedLine.match(/^(\d+)\.\s*(.+)/);
            if (numberedMatch) {
                elements.push(
                    <div key={index} style={{ marginTop: '8px', marginBottom: '4px' }}>
                        <strong>{numberedMatch[1]}.</strong> {processBoldMarkdown(numberedMatch[2])}
                    </div>
                );
                return;
            }

            // Check for bullet points (-, *, •)
            const bulletMatch = trimmedLine.match(/^[-*•]\s*(.+)/);
            if (bulletMatch) {
                elements.push(
                    <div key={index} style={{ marginTop: '8px', marginBottom: '4px', paddingLeft: '8px' }}>
                        • {processBoldMarkdown(bulletMatch[1])}
                    </div>
                );
                return;
            }

            // Check for headings (text ending with :)
            const headingMatch = trimmedLine.match(/^(.+):$/);
            if (headingMatch) {
                elements.push(
                    <div key={index} style={{ marginTop: '12px', marginBottom: '8px' }}>
                        <strong>{headingMatch[1]}:</strong>
                    </div>
                );
                return;
            }

            // Regular text - process for bold markdown
            elements.push(
                <div key={index} style={{ marginTop: '4px', marginBottom: '4px' }}>
                    {processBoldMarkdown(trimmedLine)}
                </div>
            );
        });

        return elements;
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span className="chatbot-title">AanganOne Assistant</span>
                        <button className="chatbot-close" onClick={handleCloseClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.sender === 'bot' ? formatMessage(msg.text) : msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="typing-indicator">
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input-area" style={{ position: 'relative', zIndex: 1 }}>
                        <input
                            type="text"
                            className="chatbot-input"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button className="chatbot-send" onClick={handleSend} disabled={isLoading || !inputValue.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>

                    {showCloseMenu && (
                        <div className="close-menu-overlay">
                            <div className="close-menu">
                                <h3 className="close-menu-title">Close Chat</h3>
                                <p className="close-menu-subtitle">What would you like to do?</p>

                                <button className="close-menu-btn clear-btn" onClick={handleClearConversation}>
                                    Clear Conversation
                                </button>

                                <button className="close-menu-btn close-btn" onClick={handleCloseChat}>
                                    Close Chat
                                </button>

                                <button className="close-menu-btn cancel-btn" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {!isOpen && (
                <button className="chatbot-fab" onClick={toggleChat} aria-label="Chat with us">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Chatbot;
