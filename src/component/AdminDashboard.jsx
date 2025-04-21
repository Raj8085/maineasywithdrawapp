import { useState, useEffect } from "react"
import axios from "axios"

const AdminDashboard = () => {
  const [payments, setPayments] = useState([])
  const [replyEmail, setReplyEmail] = useState("")
  const [replyMessage, setReplyMessage] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      const response = await axios.get("https://wallentcardwithauthentication.onrender.com/auth/admin/payments")
      setPayments(response.data)
    } catch (error) {
      console.error("Error fetching payments:", error)
    }
  }

  const handleReply = async (e) => {
    e.preventDefault()
    try {
      await axios.post("https://wallentcardwithauthentication.onrender.com/auth/admin/reply", {
        customerEmail: replyEmail,
        message: replyMessage,
      })
      setStatus("Reply sent successfully!")
      setReplyEmail("")
      setReplyMessage("")
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus("Error sending reply. Please try again.")
    }
  }

  const handleUpdateStatus = async (paymentId, newStatus) => {
    try {
      await axios.put("https://wallentcardwithauthentication.onrender.com/auth/admin/payment-status", {
        paymentId,
        status: newStatus,
      })
      fetchPayments() // Refresh the payments list
    } catch (error) {
      console.error("Error updating payment status:", error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <h3 className="text-xl font-semibold mb-2">Payments</h3>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Email</th>
            <th className="border p-2">Card ID</th>
            <th className="border p-2">Plan</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="border p-2">{payment.email}</td>
              <td className="border p-2">{payment.cardId}</td>
              <td className="border p-2">{payment.planTitle}</td>
              <td className="border p-2">{payment.planPrice}</td>
              <td className="border p-2">{payment.status}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleUpdateStatus(payment.id, "approved")}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleUpdateStatus(payment.id, "rejected")}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-8 mb-2">Reply to Customer</h3>
      <form onSubmit={handleReply} className="space-y-4">
        <div>
          <label className="block mb-1">Customer Email:</label>
          <input
            type="email"
            value={replyEmail}
            onChange={(e) => setReplyEmail(e.target.value)}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">Reply Message:</label>
          <textarea
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            required
            className="w-full border rounded px-2 py-1"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Reply
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  )
}

export default AdminDashboard

