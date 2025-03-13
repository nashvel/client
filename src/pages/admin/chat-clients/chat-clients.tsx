import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../../components/breadcrums'
import Header from '../../../layouts/header'
import Sidemenu from '../../../layouts/sidemenu'
import { EmojiSmile, Trash, Pencil } from 'react-bootstrap-icons'
import sticker1 from '../../../assets/stickers/sticker1.png'
import sticker2 from '../../../assets/stickers/sticker2.png'
import sticker3 from '../../../assets/stickers/sticker3.png'
import Sticker from './sticker'
import './chat-client.css'

interface Message {
  sender: string
  text?: string
  sticker?: string
  timestamp: string
}

const clients = ['HarGem Korean Foodies', 'Demo 2']
const stickers = [sticker1, sticker2, sticker3]

const ChatToClients: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<string>(clients[0])
  const [messages, setMessages] = useState<Record<string, Message[]>>({})
  const [inputMessage, setInputMessage] = useState('')
  const [showStickers, setShowStickers] = useState(false)
  const [swipedIndex, setSwipedIndex] = useState<number | null>(null)
  const [swipeOffset, setSwipeOffset] = useState<number>(0)
  const [startX, setStartX] = useState<number | null>(null)
  const [showDeleteOptions, setShowDeleteOptions] = useState<number | null>(
    null
  )
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState<string>('')

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages')
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages))
  }, [messages])
  const startEditing = (index: number, currentText: string | undefined) => {
    setEditingIndex(index)
    setEditText(currentText || '') // Populate the input field with the current message
  }

  const saveEditedMessage = () => {
    if (editingIndex === null) return

    setMessages((prev) => {
      const updatedMessages = { ...prev }
      if (!updatedMessages[selectedClient]) return prev // Ensure the client has messages
      updatedMessages[selectedClient] = [...updatedMessages[selectedClient]] // Create a new array reference
      updatedMessages[selectedClient][editingIndex] = {
        ...updatedMessages[selectedClient][editingIndex], // Spread to maintain existing properties
        text: editText,
      }
      return updatedMessages
    })
    setEditingIndex(null) // Exit editing mode
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return
    const newMessage: Message = {
      sender: 'Admin',
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prev) => ({
      ...prev,
      [selectedClient]: [...(prev[selectedClient] || []), newMessage],
    }))
    setInputMessage('')
  }

  const sendSticker = (sticker: string) => {
    const newMessage: Message = {
      sender: 'Admin',
      sticker,
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prev) => ({
      ...prev,
      [selectedClient]: [...(prev[selectedClient] || []), newMessage],
    }))
    setShowStickers(false)
  }

  const deleteMessage = (index: number, fromEveryone: boolean) => {
    setMessages((prev) => {
      const updatedMessages = { ...prev }
      if (fromEveryone) {
        updatedMessages[selectedClient] = updatedMessages[
          selectedClient
        ].filter((_, i) => i !== index)
      } else {
        // Logic for deleting only for current user (optional, modify if needed)
      }
      return updatedMessages
    })
    setShowDeleteOptions(null)
  }

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    setStartX(e.touches[0].clientX)
    setSwipedIndex(index)
    setSwipeOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX !== null && swipedIndex !== null) {
      const moveX = e.touches[0].clientX
      const diff = startX - moveX
      if (diff > 0) {
        setSwipeOffset(-Math.min(diff, 80)) // Limit max swipe left
      }
    }
  }

  const handleTouchEnd = () => {
    if (swipeOffset < -40) {
      setSwipeOffset(-80) // Fully reveal buttons
    } else {
      setSwipedIndex(null)
      setSwipeOffset(0)
    }
    setStartX(null)
  }

  return (
    <>
      <Header />
      <Sidemenu />

      <div className="main-content app-content chat-container">
        <div className="container-fluid">
          <Breadcrumb title="Chat to Clients" active={selectedClient} />

          <div className="flex">
            <div className="w-1/4 bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-bold mb-2">Clients</h3>
              <ul>
                {clients.map((client) => (
                  <li
                    key={client}
                    className={`p-2 cursor-pointer ${
                      selectedClient === client
                        ? 'bg-blue-200'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedClient(client)}
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-3/4 bg-white p-4 shadow rounded-lg ml-4">
              <h3 className="text-lg font-bold mb-2">{selectedClient}</h3>
              <div className="h-80 overflow-y-auto border p-2 chat-window">
                {messages[selectedClient]?.map((msg, index) => (
                  <div key={index} className="message-wrapper">
                    {/* Trash & Edit Buttons (Behind Message) */}
                    <div className="message-actions">
                      <button
                        className="delete-btn"
                        onClick={() => setShowDeleteOptions(index)}
                      >
                        <Trash size={16} />
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => startEditing(index, msg.text)}
                      >
                        <Pencil size={16} />
                      </button>
                    </div>

                    {/* Message Content (Swipeable) */}
                    <div
                      className="chat-message"
                      style={{
                        transform: `translateX(${
                          swipedIndex === index ? swipeOffset : 0
                        }px)`,
                        transition: 'transform 0.3s ease-in-out',
                      }}
                      onTouchStart={(e) => handleTouchStart(e, index)}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className="message-content">
                        <strong>{msg.sender}:</strong>{' '}
                        {editingIndex === index ? (
                          <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') saveEditedMessage()
                            }}
                          />
                        ) : (
                          msg.text && <span>{msg.text}</span>
                        )}
                        {msg.sticker && (
                          <img
                            src={msg.sticker}
                            alt="sticker"
                            className="w-16 h-16 inline-block"
                          />
                        )}
                        <span className="text-gray-400 text-sm ml-2">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>

                    {/* Delete Confirmation Popup */}
                    {showDeleteOptions === index && (
                      <div className="delete-options flex flex-col space-y-2 p-2 bg-white shadow-lg rounded-lg mt-20 border border-gray-200 z-10">
                        <button
                          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                          onClick={() => deleteMessage(index, true)}
                        >
                          Delete from Everyone
                        </button>
                        <button
                          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
                          onClick={() => deleteMessage(index, false)}
                        >
                          Delete from You
                        </button>
                        <button
                          className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                          onClick={() => setShowDeleteOptions(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white px-4 rounded-r"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => setShowStickers(!showStickers)}
                    className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <EmojiSmile size={24} />
                  </button>
                </div>
                {showStickers && (
                  <Sticker stickers={stickers} onSelect={sendSticker} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatToClients
