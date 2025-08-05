import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  HelpCircle,
  Mic,
  MicOff,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'contact';
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, currentLanguage } = useLanguage();

  const quickReplies = [
    'Government Schemes',
    'Job Opportunities', 
    'Health Services',
    'Emergency Help',
    'Digital Services',
    'Education Programs'
  ];

  const botResponses: Record<string, string> = {
    'government schemes': 'I can help you with various government schemes like PM Kisan, Ayushman Bharat, MGNREGA, and more. Which specific scheme are you interested in?',
    'job opportunities': 'Great! I can show you current job openings in your area including eco-tourism, organic farming, digital marketing, and local handicrafts. What type of work interests you?',
    'health services': 'Our health services include telemedicine consultations, mobile health clinics, and maternal care programs. Would you like to book a consultation or learn about nearby health centers?',
    'emergency help': 'For emergencies, dial 108 immediately. For women\'s safety, use our SOS feature or call our 24/7 helpline at 1800-NAVC-HELP. How can I assist you right now?',
    'digital services': 'I can help you with digital payments, internet connectivity, online applications, and digital literacy programs. What would you like to learn about?',
    'education programs': 'We offer digital literacy, skill development, language classes, and vocational training. Which program would you like to know more about?',
    'hello': 'नमस्ते! I\'m your Navchetna assistant. I can help you with government schemes, jobs, health services, and more. How can I help you today?',
    'namaste': 'नमस्ते! Welcome to Navchetna. I\'m here to help you access various services and information. What would you like to know?',
    'help': 'I can assist you with:\n• Government schemes and applications\n• Job opportunities and career guidance\n• Health services and consultations\n• Emergency support and safety\n• Digital services and training\n• Education and skill development\n\nWhat would you like to explore?',
    'default': 'I understand you\'re looking for information. Let me connect you with the right resources. You can also call our helpline at 1800-123-NAVC for immediate assistance.'
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: `नमस्ते! I'm your Navchetna AI assistant. I can help you with government schemes, job opportunities, health services, and more. How can I assist you today?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    handleSend();
  };

  const toggleVoice = () => {
    if (isListening) {
      setIsListening(false);
      // Stop speech recognition
    } else {
      setIsListening(true);
      // Start speech recognition
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Read the last bot message
      const lastBotMessage = messages.filter(m => m.sender === 'bot').pop();
      if (lastBotMessage) {
        const utterance = new SpeechSynthesisUtterance(lastBotMessage.text);
        utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600'
        } text-white`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Navchetna AI Assistant</h3>
                  <p className="text-xs text-orange-100">Always here to help</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={toggleSpeech}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  title={isSpeaking ? 'Stop speaking' : 'Read message'}
                >
                  {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <a
                  href="tel:1800-123-NAVC"
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  title="Call helpline"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-orange-500 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <div className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-orange-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.slice(0, 3).map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-10"
                />
                <button
                  onClick={toggleVoice}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                    isListening 
                      ? 'text-red-500 bg-red-50' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </button>
              </div>
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white p-2 rounded-xl transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-xs text-gray-500">
                For emergency: <a href="tel:108" className="text-red-600 font-medium">108</a> | 
                Helpline: <a href="tel:1800-123-NAVC" className="text-orange-600 font-medium">1800-123-NAVC</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;