export default function Button({test, btnClick, btn}) {
  return (
   <button onClick={btnClick} className={btn}>
     {test}
   </button>
  )
}