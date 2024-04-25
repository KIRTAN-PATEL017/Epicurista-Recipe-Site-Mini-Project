class Card1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            head : "About Us",
            text : "This Website is created by Kirtan Patel [22BCE3410] as part of the cirriculum for  college Mini Project. I have used HTML, CSS to design and JavaScript to add Dynamicity."
        }
    }

    render(){
        return(
            <>
                <span> {this.state.head} </span>
                <p> {this.state.text} </p>
            </>
        )       
    }
} 