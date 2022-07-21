import PopUpUtilProps from "./PopUpUtilProps";
import {motion} from "framer-motion";


export default function PopupUtil(props:PopUpUtilProps){


    return(
        <motion.div animate={{ opacity:1, scale:1}} initial={{ scale:".3", opacity:0}}  transition={{type:"spring", delay:.4}}>
            {props.children}
        </motion.div>

        )
}
