import React from 'react';
import "./passGuard.css";
import { Feature } from "../../components/index";


const PassGuard = () => {
  return (
    <div className='passGuard__info section-margin' id='wgpt3'>
      <div className='passGuard__info-feature'>
        <Feature title={"PASSGUARD"} text={"PassGuard is a secure, privacy-first password manager designed to simplify and strengthen your digital life. It is your dedicated digital security shield—a robust platform that allows you to effortlessly create, store, and auto-fill unique, complex passwords across all your websites and apps.The internet is built on passwords, but your security shouldn't be a chore. PassGuard is more than just a place to store logins; it's an active, intelligent shield for your entire digital life."} />
      </div>
      <div className='passGuard__info-Heading'>
        <h1 className='gradient__text'>
          The unbreakable shield for your digital life
        </h1>
        <p>
          Explore the Vault
        </p>
      </div>
      <div className='passGuard__info-containers'>
        <Feature title={"The Vault"} text={"This is the core of PassGuard, functioning as a highly encrypted digital safe.This Vault is built on a Zero-Knowledge architecture, which is our unbreakable promise to you. It means all encryption and decryption happen locally on your device. We never have access to your Master Password or your data."}/>
        <Feature title={"Password Generator"} text={" Password Generator is an intelligent defense that replaces weak, predictable passwords. With a single click, it uses a secure cryptographic method (CSPRNG) to create a truly random, complex, and brute-force-resistant password. It's fully integrated, automatically suggesting a strong password whenever you sign up for a new website."}/>
        <Feature title={"Security Check"} text={"A password manager shouldn't just store your passwords; it should actively help you strengthen them. The Security Check is your personal, real-time security auditor, constantly analyzing the health of your entire digital footprint. It tirelessly scans your Vault to identify and flag critical vulnerabilities before they can be exploited by attackers."}/>

      </div>
    </div>
  )
}

export default PassGuard; 
