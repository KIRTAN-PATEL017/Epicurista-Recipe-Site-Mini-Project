class Card3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headcard3 : "WELCOME",
            textcard3 : "Explore a world of flavors with our curated collection of recipes. From comforting classics to innovative dishes, we have something for every palate and occasion. Whether you're a seasoned chef or a beginner in the kitchen, let us inspire you to create delicious   meals that will impress and satisfy." ,
            footercard3 : "Happy Cooking"
        }
    }

    render(){
        return(
            <>
                <div className ="greet-head"> {this.state.headcard3} </div>
                <div className ="greet-text"> {this.state.textcard3}</div>
                <div className ="greet-foot">{this.state.footercard3}</div>
            </>
        )       
    }
} 