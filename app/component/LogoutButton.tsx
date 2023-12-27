"use client";

// import { signOut } from '@/auth'
import React from 'react'
import { logoutAction } from '../actions/logout';

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
      <button>Sign Out</button>
    </form>
  )
}

export default LogoutButton
