class Card5 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : "Contact",
            phone : "(+91) 9725521195",
            email : "kirtan001177@gmail.com",
            github : "GitHub"
        }
    }

    render(){
        return(
            <>
                <span> {this.state.title} </span>
                <ul>
                    <li> {this.state.title} </li>
                    <li> {this.state.email} </li>
                    <li><a href="https://github.com/KIRTAN-PATEL017/Epicurista-Recipe-Site-Mini-Project">{this.state.github}</a></li>
                </ul>
            </>
        )
    }
} 