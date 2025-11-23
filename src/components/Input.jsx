import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-2 pl-1 text-sm font-medium text-text-muted'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-4 py-3 rounded-lg bg-surface text-text-main outline-none focus:bg-surface-hover focus:ring-2 focus:ring-primary border border-border w-full transition-all duration-200 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input