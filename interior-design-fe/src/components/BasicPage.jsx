export default function BasicPage({children, className}){
  return(
    <div className={`
      relative w-[100vw] text-black 
      md:px-[12.5%]
      ${className}
    `}>
      {children}
    </div>
  )
}