import React, { Fragment } from "react";
import classNames from "classnames";
import { Listbox, Transition } from "@headlessui/react";
import { changeLocale } from "gatsby-plugin-intl";

// Images
import imageUsa from "../../images/icons/estados-unidos.png";
import imageEsp from "../../images/icons/espana.png";
import imageBr from "../../images/icons/brasil.png";
import imageJapan from "../../images/icons/japan.png";

const langs = {
  en: {
    name: "English",
    avatar: imageUsa,
  },
  es: {
    name: "Español",
    avatar: imageEsp,
  },
  pt: {
    name: "Português",
    avatar: imageBr,
  },
  ja: {
    name: "日本語 - Japanese",
    avatar: imageJapan,
  },
};

export const LanguageSelectorDropdown = ({ currentLang }) => {
  return (
    <Listbox value={currentLang} onChange={changeLocale}>
      <div className="mt-1 relative">
        <Listbox.Button className="w-full pl-3 pr-10 py-2">
          <span className="flex items-center">
            <span className="mr-4 block truncate font-medium">
              {langs[currentLang].name}
            </span>
            <img
              src={langs[currentLang].avatar}
              alt="iconflag"
              className="flex-shrink-0 h-6 w-6"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 sm:text-sm">
            {Object.keys(langs).map((langId) => (
              <Listbox.Option
                key={langId}
                className={({ active }) =>
                  classNames(
                    active ? "text-white bg-indigo-600" : "text-gray-900",
                    "cursor-default select-none  py-2 pl-3 pr-9"
                  )
                }
                value={langId}
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex items-center">
                      <img
                        src={langs[langId].avatar}
                        alt=""
                        className="flex-shrink-0 h-6 w-6 rounded-full"
                      />
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "ml-3 block truncate"
                        )}
                      >
                        {langs[langId].name}
                      </span>
                    </div>
                    {selected ? (
                      <span
                        className={classNames(
                          active ? "text-white" : "text-indigo-600",
                          "absolute inset-y-0 right-0 flex items-center pr-4"
                        )}
                      ></span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export const LanguageSelectorList = ({ currentLang }) => {
  return (
    <div>
      {Object.keys(langs).map((langId) => (
        <li
          key={langId}
          className={classNames(
            "flex items-center cursor-default select-none  py-2 pl-3 pr-9",
            currentLang === langId
              ? "text-white bg-indigo-600"
              : "text-gray-900"
          )}
          onClick={() => changeLocale(langId)}
        >
          <img
            src={langs[langId].avatar}
            alt=""
            className="flex-shrink-0 h-6 w-6 rounded-full"
          />
          <span
            className={classNames(
              currentLang === langId ? "font-semibold" : "font-normal",
              "ml-3 block truncate"
            )}
          >
            {langs[langId].name}
          </span>
        </li>
      ))}
    </div>
  );
};
