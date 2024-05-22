import React from 'react'
import ToggleButtonWithLabel from './ToggleButtonWithLabel'

export default function NotificationsContainer() {
  return (
    <>
            <div className="flex flex-col w-[30%] h-[auto] bg-red-300 py-4 px-3">
            <p className="text-3xl font-medium mb-4">Mes notifications</p>
            <p className="w-[100%] mb-10 ">
            Recevez les informations qui comptent vraiment pour vous. 
            Sélectionnez vos préférences de notification pour rester à jour.
        </p>
          <ToggleButtonWithLabel label="Notifications hors connexion" />
          <ToggleButtonWithLabel label="Notifications email" margin="mt-2" />
          <ToggleButtonWithLabel label="Alertes quand je suis connecté(e)" margin="mt-2"/>
            </div>
    </>
  )
}
