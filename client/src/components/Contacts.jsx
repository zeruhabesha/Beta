import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveChat, fetchChats } from '../redux/chatsSlice'
import { useEffect } from 'react'
import { getChatName, getChatPhoto, timeSince } from '../utils/logics'
import NoContacts from './ui/NoContacts'
import './contacts.css';

// import SkeletonLoading from './ui/SkeletonLoading'
var aDay = 24 * 60 * 60 * 1000;
function Contacts() {
  const { chats, activeChat } = useSelector((state) => state.chats)
  const dispatch = useDispatch()
  const activeUser = useSelector((state) => state.activeUser)
  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])
  return (
    <>
      <div style={{overflowY:`auto`}} className='flex flex-col -space-y-1 overflow-y-scroll scrollbar-hide h-[75vh] pb-10'>
        {
          chats?.length > 0 ? chats?.map((e) => {
            return (
              <div onClick={() => {
                dispatch(setActiveChat(e))
              }} key={e._id}  style={{padding: `1rem 1rem 0rem 1rem`, margin: `26px 0px -24px 15px`, borderRadius: `25px 0px 0px 25px`,    background: `linear-gradient(318deg, rgb(2 208 208), #fff389)`}}  className={`between2 flex items-center justify-between sm:gap-x-1 md:gap-x-1 ${activeChat._id === e._id ? "bg-[#fafafa]" : "bg-[#fff]"} cursor-pointer  py-0`}>
                <div className='flex items-center gap-x-3 sm:gap-x-1 md:gap-x-3'>
                  <img className='w-12 h-12  sm:w-12 sm:h-12 rounded-[30px] shadow-lg object-cover' src={getChatPhoto(e, activeUser)} alt="" />
                  <div>
                    <h5 className='text-[13.6px] sm:text-[16px] text-[#2b2e33] font-bold'>{getChatName(e, activeUser)}</h5>
                    <p className='text-[13.6px] sm:text-[13.5px] font-medium text-[#56585c] '>  {e.latestMessage?.message.length > 30
                      ? e.latestMessage?.message.slice(0, 30) + "..."
                      : e.latestMessage?.message
                    }</p>
                  </div>
                </div>
                <div className='flex flex-col items-end gap-y-[8px]'>
                  <p className='text-[12.4px] sm:text-[12px]  font-normal text-[#b0b2b3] tracking-wide'>{timeSince(new Date(Date.parse(e.updatedAt) - aDay))}</p>
                </div>
              </div>
            )
          }) : <NoContacts />
        }
      </div>

    </>
  )
}

export default Contacts