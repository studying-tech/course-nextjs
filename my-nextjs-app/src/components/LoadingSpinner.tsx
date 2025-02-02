export function LoadingSpinner() {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className='animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent' />
      <span className='ml-2'>読み込み中...</span>
    </div>
  )
}
