import React, {useState} from 'react';
import styles from './style.module.css'

const Title = props => {
    const {input , setInput} = props;
    const [currentIndex , setCurrentIndex] = useState(0);
    const [display , setDisplay] = useState(false);
    
   
    


    const onClick= (e) => {
       setCurrentIndex(e.target.getAttribute('index'))
       console.log(currentIndex)
        e.target.setAttribute('className', 'styles.clicked ');
    
    setDisplay(true);
    console.log(display);
    
       
        
    }


   

    const displayContent = input.filter( (item,i)=> { 
      return(  item.index == currentIndex)

    }).map((item ,i)=> {
       return <div className={styles.content} key={i}>{item.content}</div>
    });

    const displayTitles = input.map( (item,i)=>{
            return (
             
                
                <div  onClick={onClick} index={i}  className={styles.title} key={i}>{item.name}</div>

            )

        })
    

    return (
        <div>
        {displayTitles}
        {displayContent}
        
        </div>


    )
}
export default Title;