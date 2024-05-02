import React from 'react'

export default function About(props) {
  return (
    <div className="container" >
        <h1 className='my-3'  style={{color : props.mode === 'dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={{backgroundColor : props.mode === 'dark'?'white':'black', color : props.mode === 'light'?'black':'white'}} >
                <h2 className="accordion-header">
                <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor : props.mode === 'light'?'white':'#212529', color : props.mode === 'light'?'black':'white'}}>
                    About editKar
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor : props.mode === 'light'?'white':'Black', color : props.mode === 'light'?'black':'white'}}>
                        <strong>Welcome to Text editKar,</strong> where we transform ordinary text into extraordinary expressions! Our mission is to provide you with the tools and resources to enhance your<code> text creatively and efficiently.</code>,<br/><br/>
                        <p>With a passion for web development and a keen eye for design, we strive to simplify the process of modifying text for a wide range of purposes. Whether you're looking to add flair to your social media posts, create stunning headlines, or improve the readability of your content, Text Modifiers has you covered.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor : props.mode === 'light'?'white':'Black', color : props.mode === 'light'?'black':'white'}}>
                <h2 className="accordion-header" >
                    <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor : props.mode === 'light'?'white':'#212529', color : props.mode === 'light'?'black':'white'}}>
                        Our Vision
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor : props.mode === 'light'?'white':'Black', color : props.mode === 'light'?'black':'white'}}>
                        At editKar, our vision is to empower individuals and businesses to express themselves creatively through text. We envision a world where text is not just a means of communication, but a form of art that inspires, captivates, and resonates with audiences around the globe.<br/><br/>

                        We strive to be the go-to platform for anyone looking to elevate their text game, offering innovative tools and resources that make text modification accessible to all. Our vision is to democratize creativity, enabling everyone to transform their ideas into compelling text that leaves a lasting impression.<br/><br/>

                        As we look to the future, we envision Text Modifiers as a hub of inspiration and innovation, where users can explore new ways to enhance their text and connect with a community of like-minded individuals. Together, we can redefine the boundaries of text and unlock its full potential as a medium of expression.<br/><br/>

                        Join us in shaping the future of editKar and let's create something extraordinary, one word at a time.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor : props.mode === 'light'?'white':'Black', color : props.mode === 'light'?'black':'white'}}>
                <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor : props.mode === 'light'?'white':'#212529', color : props.mode === 'light'?'black':'white'}}>
                        Our Mission
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Our mission at editKar is to empower our users to unleash their creativity and enhance their communication through innovative text modification tools. We are committed to providing a seamless and intuitive platform that allows anyone, regardless of their background or experience, to transform ordinary text into captivating content.<br/><br/>

                        We strive to inspire and support our community in exploring new ways to express themselves, whether it's through eye-catching social media posts, engaging blog content, or professional-looking presentations. By offering a diverse range of text modification options and staying at the forefront of technological advancements, we aim to make the process of enhancing text both enjoyable and effective.<br/><br/>

                        At editKar, we believe that every word matters, and our mission is to help you make every word count. Join us on our mission to revolutionize text modification and unlock the full potential of your communication.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
