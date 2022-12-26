export function Loader() {
  return (
    <div className='loader'>
      {/* <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL --> */}
      {/* <!-- Todo: add easing --> */}
      <svg
        className='rotate'
        width='57'
        height='57'
        viewBox='0 0 57 57'
        xmlns='http://www.w3.org/2000/svg'
        stroke='#81D3AD'>
        <g fill='#32B77A' fillRule='evenodd'>
          <g transform='translate(1 1)' strokeWidth='2'>
            <circle cx='5' cy='50' r='5'>
              <animate
                attributeName='cy'
                begin='0s'
                dur='2.2s'
                values='50;5;50;50'
                calcMode='ease-out'
                repeatCount='infinite'
              />
              <animate
                attributeName='cx'
                begin='0s'
                dur='2.2s'
                values='5;27;49;5'
                calcMode='ease-out'
                repeatCount='infinite'
              />
            </circle>
            <circle cx='27' cy='5' r='5'>
              <animate
                attributeName='cy'
                begin='0s'
                dur='2.2s'
                from='5'
                to='5'
                values='5;50;50;5'
                calcMode='ease-out'
                repeatCount='infinite'
              />
              <animate
                attributeName='cx'
                begin='0s'
                dur='2.2s'
                from='27'
                to='27'
                values='27;49;5;27'
                calcMode='ease-out'
                repeatCount='infinite'
              />
            </circle>
            <circle cx='49' cy='50' r='5'>
              <animate
                attributeName='cy'
                begin='0s'
                dur='2.2s'
                values='50;50;5;50'
                calcMode='ease-out'
                repeatCount='infinite'
              />
              <animate
                attributeName='cx'
                from='49'
                to='49'
                begin='0s'
                dur='2.2s'
                values='49;5;27;49'
                calcMode='ease-out'
                repeatCount='infinite'
              />
            </circle>
          </g>
        </g>
      </svg>{" "}
      <h5>Loading...</h5>
    </div>
  )
}
