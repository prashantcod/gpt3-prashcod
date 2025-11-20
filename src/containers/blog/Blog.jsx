
import "./blog.css" ; 
import Article from "../../components/article/Article.jsx"; 
import { blog01, blog02, blog03 ,blog04 ,blog05} from "../../containers/blog/imports.js" ;

const Blog = ({imgUrl , text , title , date}) => {
  return (
    <div className='passGuard__blog section-padding' id='blog'>
        <div className='passGuard__blog-heading'>
             <h1 className='gradient__text'>Security moves fast, We help you keep up.</h1>
        </div>

        <div className='passGuard__blog-container'>
            <div className='passGuard__blog-container_groupA'>
                <Article imgUrl={blog01}
                 date={"19-Nov-2025"} 
                 title={"Stop Guessing, Start Generating: Eliminating Human Predictability as the Single Biggest Cyber Risk."}
                 text={"Your brain is your greatest vulnerability. We are wired to create patterns—pets' names, birthdays, or sequential numbers—which makes your passwords dangerously easy targets for automated attacks. This article delves into the critical security flaws introduced by human predictability and explains why password reuse and simplicity are the root causes of major data breaches. Learn how PassGuard’s Cryptographically Secure Generator (CSPRNG) completely removes this risk factor, providing every single online account with a unique, high-entropy key that is mathematically impossible to guess, finally securing your digital life against the most common form of attack"}/>
            </div>
            <div className='passGuard__blog-container_groupB'>
                 <Article imgUrl={blog02}
                  date={"19-Nov-2025"} 
                  title={"Why ' Zero-Knowledge ' Encryption is the Only Way to Truly Protect Your Data."}/>
                 <Article imgUrl={blog03}
                  date={"19-Nov-2025"} 
                  title={"The ' Domino Effect ' : Why Reusing Passwords is the #1 Security Risk."}/>
                 <Article imgUrl={blog04}
                  date={"19-Nov-2025"} 
                  title={"Brute Force Attacks Explained: How the Password Generator Beats Hackers."}/>
                 <Article imgUrl={blog05}
                  date={"19-Nov-2025"} 
                  title={"Is Your Email on the Dark Web? How our Security Check Finds Out."}/>
            </div>
        </div>
    </div>
  )
}

export default Blog
