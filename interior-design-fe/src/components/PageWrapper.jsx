import {motion} from 'framer-motion';

function PageWrapper({children }){

  return(
    <>
      <motion.div
      key="transition"
        initial=    {{opacity:1, x:0}}
        animate=    {{opacity:0, x:0}}
        exit=       {{opacity:1, x:0}}
        transition= {{duration:.4}}
        className="fixed inset-0 w-screen h-screen bg-black z-50 pointer-events-none"
      >
      </motion.div>
      {children}
      
    </>
  );
}

export default PageWrapper;