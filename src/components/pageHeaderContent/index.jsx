import './style.scss';

const pageHeaderContent = (props)=>{

    const {headerText,icon} = props;
    
    return(
    <div className="weapper">
    <h2> {headerText}</h2>
        <span>{icon}</span>

    </div>
    



    );
};
export default pageHeaderContent;