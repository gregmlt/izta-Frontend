import React from 'react'
import PrimaryButton from './PrimaryButton'

function CompagnyProfileModal() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4 rounded-md">

          {/* champs nom et description entreprise */}
      <div className="bg-white p-6 rounded w-[80%]">
        <h3 className="text-xl font-bold mb-4 ">Titre de l'Entreprise</h3>
        <p className="mb-4">
          Ceci est un paragraphe exemple qui contient deux lignes.<br />
          Il s'ajuste pour rester centré et responsive.
        </p>
        <div className="mb-4 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder='Donnez une brève introduction de votre entreprise, 
y compris sa mission et ses valeurs.'
          />
        </div>
      </div>

      {/* champs liens externes */}
      <div className='my-5 w-[40%] p-6'>
      <h3 className="text-xl font-bold mb-4 ">Liens externes</h3>
        <div className='mb-3 flex flex-col'>
        <input type="text" className='rounded-sm border border-slate-300'/>
        <label className='text-gray-600'>Site web</label>
        </div>
        <div className='mb-3 flex flex-col'>
        <input type="text" className='rounded-sm border border-slate-300'/>
        <label className='text-gray-600'>LinkedIn</label>
        </div>
        <div className='mb-3 flex flex-col'>
        <input type="text" className='rounded-sm border border-slate-300'/>
        <label className='text-gray-600'>Glassdoor</label>
        </div>
        <div className='mb-3 flex flex-col'>
        <input type="text" className='rounded-sm border border-slate-300'/>
        <label className='text-gray-600'>Welcome to the Jungle</label>
        </div>
      </div>
      <div className='divide-x-[80%]'/>

      {/* champs informations administratives */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="p-6 rounded w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-6">Informations administratives</h3>
        
        {/* Row 1 */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <label htmlFor="siretNumber" className="block text-sm font-medium text-gray-700">
              Numéro de SIRET
            </label>
            <input
              type="text"
              id="siretNumber"
              className="mt-1 block w-full p-2  focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label htmlFor="creationDate" className="block text-sm font-medium text-gray-700">
              Date de création
            </label>
            <input
              type="text"
              id="creationDate"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Full width input */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Ville
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
              Région
            </label>
            <select
              id="region"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              Code postal
            </label>
            <input
              type="text"
              id="postalCode"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">
              Nombres d'employés
            </label>
            <select
              id="employeeCount"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industrie
            </label>
            <select
              id="industry"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="labels" className="block text-sm font-medium text-gray-700">
              Labels
            </label>
            <select
              id="labels"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
        </div>
      </div>
    </div>


      {/* champs informations complémentaires */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-6">Informations complémentaires</h3>
        
        {/* Group 1: Parité entreprise */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parité entreprise
          </label>
          <div className="flex flex-wrap -mx-2 mb-2">
            <div className="w-full md:w-1/2 px-2 flex items-center">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m10.25 21.5c4.2802 0 7.75-3.4698 7.75-7.75 0-4.28021-3.4698-7.75-7.75-7.75-4.28021 0-7.75 3.46979-7.75 7.75 0 4.2802 3.46979 7.75 7.75 7.75z"/><path d="m21.5 2.5-5.5 5.5"/><path d="m15 2.5h6.5v6.5"/></g></svg>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nombre d'hommes"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 flex items-center">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m12 16c3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7 0 3.866 3.13401 7 7 7z"/><path d="m12 16v6"/><path d="m15 19h-6"/></g></svg>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nombre de femmes"
              />
            </div>
          </div>
        </div>

        {/* Group 2: Parité au sein de la direction */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parité au sein de la direction
          </label>
          <div className="flex flex-wrap -mx-2 mb-2">
            <div className="w-full md:w-1/2 px-2 flex items-center">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m10.25 21.5c4.2802 0 7.75-3.4698 7.75-7.75 0-4.28021-3.4698-7.75-7.75-7.75-4.28021 0-7.75 3.46979-7.75 7.75 0 4.2802 3.46979 7.75 7.75 7.75z"/><path d="m21.5 2.5-5.5 5.5"/><path d="m15 2.5h6.5v6.5"/></g></svg>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nombre d'hommes"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 flex items-center">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m12 16c3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7 0 3.866 3.13401 7 7 7z"/><path d="m12 16v6"/><path d="m15 19h-6"/></g></svg>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nombre de femmes"
              />
            </div>
          </div>
        </div>

        {/* Group 3: Age moyen et Ecart de salaire maximum */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age moyen
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ecart de salaire maximum
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
        </div>

        {/* Group 4: Turnover et Mécénat */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Turnover
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mécénat
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner</option>
              {/* Ajouter d'autres options ici */}
            </select>
          </div>
        </div>
      </div>
    </div>

        <div className='flex justify-end'>
            <div className='mr-3'>
            <PrimaryButton text="Annuler" bgColor="bg-gray-400" hoverColor="hover:bg-[#3371a1]"/>
            </div>
            <div>
            <PrimaryButton
                  bgColor="bg-[#003761]"
                  text="Enregistrer les modifications"
                  hoverColor="hover:bg-[#3371a1]"
                  
                />
            </div>
        </div>
    </div>
  )
}

export default CompagnyProfileModal