import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Categories } from "../../data";
import { ICategory } from "../../interfaces";

interface IProps {
  selected: { name: string; imageURL: string };
  setSelected: (category: ICategory) => void;
}

export default function Select({ selected, setSelected }: IProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-lg text-amber-900">Category</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-xl bg-stone-300 p-2 text-left text-amber-700">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              alt=""
              src={selected.imageURL}
              className="size-5 shrink-0 rounded-full"
            />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon className="col-start-1 row-start-1 size-5 self-center justify-self-end text-amber-800" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-xl bg-stone-300/95 backdrop-blur-3xl text-base shadow-lg ring-1 ring-black/5">
          {Categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-amber-800 hover:bg-amber-700/40"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={category.imageURL}
                  className="size-5 shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{category.name}</span>
              </div>
              {selected.name === category.name && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-amber-900">
                  <CheckIcon className="size-5" />
                </span>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
