const SelectOption = ({ title, option, setOption, options }) => {
  return (
    <div className='space-y-2'>
      <label htmlFor='type' className='text-white text-sm font-bold'>
        {title}
      </label>
      <select
        id='type'
        className='w-full rounded p-2'
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        {options?.map((item) => (
          <option key={item.id} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectOption
