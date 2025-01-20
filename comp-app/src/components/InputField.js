import {useState} from "react";

const InputField = ({type, placeholder, icon}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
        <div className="input-weapper">
            <input
               type= {isPasswordShown ? 'text' : type}
               placeholder={placeholder}
               className="input-field"
               required
               />
               <i className="material-symbols-rounded">{icon}</i>
               {type === 'password' && (
                <i onClick={() => setIsPasswordShown(prevState => 
            !prevState)} className="material-symbols-rounded eye-icon">        
                {setIsPasswordShown ? 'visibility' : "visibility_off"}
                </i>
               )}
            
               </div>

            
    )
}

export default InputField;