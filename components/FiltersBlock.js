import React from 'react'
import SearchBar from "@/components/SearchBar";
import DropdownAllFilter from "@/components/DropdownAllFilter";
import DropDownDistrict from "@/components/DropDownDistrict";
import DropDownActivityArea from "@/components/DropDownActivityArea";
import DropDownReview from "@/components/DropDownReview";

function FiltersBlock() {
  return (
    <div>
        <div className="m-7">
        <div className="text-center my-10">
            <p className="text-3xl font-semibold text-[#003761]">
              Renseignez-vous sur l’engagement d’une entreprise.
            </p>
          </div>
            <SearchBar width="w-[570px]" />
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between w-[600px]">
              <DropDownDistrict />
              <DropDownActivityArea />
              <DropDownReview />
              <DropdownAllFilter />
            </div>
          </div>
    </div>
  )
}

export default FiltersBlock