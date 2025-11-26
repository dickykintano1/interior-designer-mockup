export default function BasicPage({children, className}){
  return(
    <div className={`relative w-[100vw] h-[calc(100dvh-80px)] text-black ${className}`}>
      {children}
    </div>
  )
}