import {motion} from 'framer-motion';

function PageWrapper({children }){
  const height = document.documentElement.scrollHeight

  return(
    <>
      <motion.div
        initial=    {{opacity:1, x:0}}
        animate=    {{opacity:0, x:0}}
        exit=       {{opacity:1, x:0}}
        transition= {{duration:.4}}
        style={{ height: `${height}px`, top:0 }}
        className={`absolute w-full bg-black z-49`}
      >
      </motion.div>
      {children}
      
    </>
  );
}

export default PageWrapper;