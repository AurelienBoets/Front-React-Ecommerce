import React from 'react'
import { useEffect }  from "react";
import SectionCgv from './../components/layouts/SectionCgv';

export default function CgvDeux() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className="flex flex-row">
      <div className=" w-96 bg-gray-300">
        <ul className="">
            <li tabIndex={0} className="collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">1. Dispositions générales</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p tabIndex={0}>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">2. Identification du fournisseur</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p tabIndex={0}><span>hello</span></p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p tabIndex={0}>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title dark:bg-black/0 text-primary-content peer-checked:bg-slate-400 peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content dark:bg-black/0  text-primary-content peer-checked:bg-slate-400 peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </li>
        </ul>
      </div>
        <SectionCgv/>
    </div>
  )
}
