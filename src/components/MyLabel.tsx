import './mylabel.css';

export interface MyLabelProps {
    /**
    * Esta é a mensagem a mostrar na etiqueta
    */
    label: string;
    /**
    * Este é o tamanho da etiqueta
    */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
    * Se quiere todo capitalizado
    */
    allCaps?: boolean;
    /**
    * Colores básicos del botón
    */
    color?: 'primary'|'secondary'|'tertiary';
    /**
    * Colores personalizado de la font
    */
    fontColorFav?: string;
}

export const MyLabel = ( {
    allCaps = false,
    color = 'primary',
    fontColorFav = '',
    label = 'No Label',
    size = 'normal'
}: MyLabelProps ) => {
    return (
        <span 
        className={ `label ${ size } text-${ color }` }
        style={{ color: fontColorFav }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}