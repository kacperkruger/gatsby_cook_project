import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className={"page"}>
        <section className={"contact-page"}>
          <article className={"contact-info"}>
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              inventore iure optio totam voluptatibus? Alias inventore ipsa,
              ipsum iste laborum laudantium molestiae necessitatibus nemo nisi
              sint sit temporibus veritatis vero.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores ex facilis fugiat id illo libero nihil ut voluptas. At
              atque commodi necessitatibus quo quod, rem ut vitae! Beatae, ipsum
              labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              amet distinctio error excepturi illo illum iure magni modi,
              obcaecati officiis pariatur praesentium quisquam quod rem ut.
              Maxime nesciunt saepe similique.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name={"name"} id={"name"} />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name={"email"} id={"email"} />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
              </div>
              <button type={"submit"} className={"btn block"}>
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
