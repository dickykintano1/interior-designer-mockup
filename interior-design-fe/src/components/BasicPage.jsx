export default function BasicPage({ children, className }) {
  return (
    <div className={`
      relative w-[100svw] text-black 
      px-5 md:px-[12.5svw] lg:px-[20svw]
      ${className}
    `}>
      {children}
    </div>
  )
}