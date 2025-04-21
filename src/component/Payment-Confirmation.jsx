import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const PaymentConfirmation = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [cardId] = useState("")
  const [planTitle, setPlanTitle] = useState("")
  const [planPrice, setPlanPrice] = useState("")
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("email", email)
    formData.append("message", message)
    formData.append("cardId", cardId)
    formData.append("planTitle", planTitle)
    formData.append("planPrice", planPrice)
    formData.append("screenshot", file)

    

    try {
      await axios.post("https://wallentcardwithauthentication.onrender.com/auth/payment-confirmation", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setStatus("Payment confirmation sent successfully!")
      navigate("/")
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus("Error sending payment confirmation. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 min-h-[100vh]">
      <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-2 py-1"
          ></textarea>
        </div>
        {/* <div>
          <label className="block mb-1">Card ID:</label>
          <input
            type="text"
            value={cardId}
            onChange={(e) => setCardId(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div> */}
        <div>
          <label className="block mb-1">Plan Title:</label>
          <input
            type="text"
            value={planTitle}
            onChange={(e) => setPlanTitle(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">Plan Price:</label>
          <input
            type="text"
            value={planPrice}
            onChange={(e) => setPlanPrice(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">Screenshot:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Payment Confirmation
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  )
}

export default PaymentConfirmation

