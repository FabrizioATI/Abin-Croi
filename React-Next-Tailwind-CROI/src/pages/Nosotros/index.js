import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import ComoInvertir from '../../components/home/como_invertir'
import ModeloCroi from '../../components/home/modelo_croi'
import AcercaDe from '../../components/home/acerca_de'
import ComoFunciona from '../../components/home/como_funcion'
import PorqueInvertir from '../../components/home/porque_invertir'
import PorqueFinanciarseConCroi from '../../components/home/porque_financiarse_con_croi'
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Example() {
    return (
        <div className="bg-white">
            <Header />
            <AcercaDe />
            <PorqueFinanciarseConCroi />
            <PorqueInvertir />
            <ComoFunciona />
            <ModeloCroi />
            <ComoInvertir />
            <Footer />
        </div>
    )
}