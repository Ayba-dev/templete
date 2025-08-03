import React from 'react'

export const Application: React.FC = () => {
  const [mode, setMode] = React.useState<'На доставку' | 'Мониторинг'>(
    'На доставку',
  )
  return (
    <>
      <div className={'border p-[16px] border-[#E0E5E8] rounded-[16px]'}>
        <div className="flex gap-1 rounded-[14px] bg-[#EAEEF0]  w-[212px] mb-[16px]  p-[3px]">
          <button
            onClick={() => setMode('На доставку')}
            className={
              mode === 'На доставку'
                ? 'rounded-[12px] px-[16px] py-[6px] bg-white'
                : 'bg-transparent px-[16px] py-[8px]  rounded-[16px] text-[#768793]'
            }
          >
            Доставка
          </button>
          <button
            onClick={() => setMode('Мониторинг')}
            className={
              mode === 'Мониторинг'
                ? 'rounded-[12px] px-[16px] py-[6px] bg-white'
                : 'bg-transparent px-[16px] py-[8px] rounded-[16px]  text-[#768793]'
            }
          >
            Мониторинг
          </button>
        </div>
      </div>
    </>
  )
}
