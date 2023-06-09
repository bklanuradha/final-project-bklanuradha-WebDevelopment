import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">✍️❤️WELCOME❤️✍️</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
               className="headerImg" 
               src="https://images.pexels.com/photos/4402584/pexels-photo-4402584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
               alt="" 
            />
        </div>
    );
}