import React from "react"
import Layout from "../components/Layout"
import { center } from "../styles/Contact.module.css"

export default function Contact() {
  const [name, setName] = React.useState("")
  const [secName, setSecName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  const sendData = () => {
    console.log("sending data")

    let params = {
      username: name,
      avatar_url: "https://data.whicdn.com/images/340038863/original.jpg",
      content: `${message} ::: you can contact me at ${email}`,
    }

    var request = new XMLHttpRequest()
    request.open(
      "POST",
      "https://discord.com/api/webhooks/876283951998726185/w511wwzOH9jNJwEwpJao9n9Ehq7v08UhKPOdJp26ePA4UGb91bbrvHe5EEVVaICmhuf6"
    )

    request.setRequestHeader("Content-type", "application/json")

    request.send(JSON.stringify(params))

    console.log(params)

    alert("message send succesfully")

    setName("")
    setSecName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Layout style={center}>
      {/* component */}
      <form className="max-w-lg my-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-textWhiteBlue text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-secBlack text-textWhiteBlue border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-textWhiteBlue text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-secBlack text-textWhiteBlue border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              value={secName}
              onChange={e => setSecName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-textWhiteBlue text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-secBlack text-textWhiteBlue border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-textWhiteBlue text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-secBlack text-textWhiteBlue border border-gray-700 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:border-gray-500 h-48 resize-none"
              id="message"
              defaultValue={""}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <p className="text-gray-600 text-xs italic">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={sendData}
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3" />
        </div>
      </form>
    </Layout>
  )
}
