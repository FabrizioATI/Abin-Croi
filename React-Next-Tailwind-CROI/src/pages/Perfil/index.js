import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import ComoInvertir from '../../components/home/como_invertir'
import ModeloCroi from '../../components/home/modelo_croi'
import AcercaDe from '../../components/home/acerca_de'
import ComoFunciona from '../../components/home/como_funcion'
import PorqueInvertir from '../../components/home/porque_invertir'
import PorqueFinanciarseConCroi from '../../components/home/porque_financiarse_con_croi'
import Footer from '../../components/footer';
import Header from '../../components/header';
import Sidebar from '../../components/user/sidebaruser';
import Profile from '../../components/user/profile';

export default function Example() {
    return (
        <div className="bg-white">
            <Sidebar />
            <div className="flex flex-wrap mt-10 ml-96">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0">
                    <div className="text-center mb-7">
                        <h1 className="text-2xl md:text-4xl text-gray-900 leading-relaxed">Mis proyectos</h1>
                    </div>
                    <Profile />
                </div>
            </div>
            <div className="mt-36">
                <Footer />
            </div>
        </div>
    )
}