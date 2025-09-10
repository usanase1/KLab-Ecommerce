"use client"

import type React from "react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
