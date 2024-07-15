import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Form = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const formatDayToAgo = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - date.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    return dayDifference > 0 ? `${dayDifference} day ago` : "Today";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("./form.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data berhasil dikirim");
        } else {
          console.error("Gagal mengirim data");
        }
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  };

  return (
    <section className="form" id="contact">
      <Fade direction="left">
        <form className="sub-form" onSubmit={handleSubmit}>
          <div className="label-text">
            <label htmlFor="name">
              <p>Name</p>
              <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="label-text">
            <label htmlFor="email">
              <p>Email</p>
              <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="label-text">
            <label htmlFor="subject">
              <p>Subject</p>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="label-textarea">
            <label htmlFor="message">
              <p>Message</p>
              <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
        <div className="sub-form">
          <h2 className="address-phone-head">Address and Phone</h2>
          <div className="address-phone-desc">
            <a
              href="https://maps.app.goo.gl/qNHHZBmoinwsx5Bi6"
              target="_blank"
              rel="noreferrer"
            >
              {data.contact && data.contact.address}
            </a>
            <a
              href={`https://wa.me/${data.contact && data.contact.phone}`}
              target="_blank"
              rel="noreferrer"
            >
              {data.contact && data.contact.phone}
            </a>
          </div>
          <h2>Lastest Tweets</h2>
          {data.contact &&
            data.tweets.map((tweet, index) => (
              <div>
                <p>{tweet.text}</p>
                <a href={tweet.link} className="tweet-link">
                  {tweet.link}
                </a>
                <p className="tweet-date">{formatDayToAgo(tweet.date)}</p>
              </div>
            ))}
        </div>
      </Fade>
    </section>
  );
};

export default Form;
