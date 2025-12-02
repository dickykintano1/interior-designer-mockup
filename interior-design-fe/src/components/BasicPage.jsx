export default function BasicPage({children, className}){
  return(
    <div className={`relative w-[100vw]  text-black ${className}`}>
      {children}
    </div>
  )
}