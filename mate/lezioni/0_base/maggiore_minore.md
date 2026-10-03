# Maggiore e Minore

Il simbolo maggiore deriva dalla teoria degli insiemi


Supponiamo di avere due insiemi con oggetti e supponiamo di non saper contare: come facciamo a sapere quale insieme ha il maggior numero di oggetti?

<GgbGraph :graphics-options="{ axis: 'none' }">
    <GgbCommand color="lightblue" :filling="0.7">elipse1 = Ellipse((-3, 3), (-3, -3), (-1, 0))</GgbCommand>
    <GgbCommand color="red">P_1 = (-3.7286,1.61799)</GgbCommand>
    <GgbCommand color="red">P_2 = (-2,2)</GgbCommand>
    <GgbCommand color="red">P_3 = (-2.27491,0.50176)</GgbCommand>
    <GgbCommand color="red">P_4 = (-3.93145,-1.20122)</GgbCommand>
    <GgbCommand color="red">P_5 = (-3.55687,-2.64661)</GgbCommand>
    <GgbCommand color="lightblue" :filling="0.7">elipse2 = Ellipse((3, 3), (3, -3), (1, 0))</GgbCommand>
    <GgbCommand color="red">P_7 = (4,2)</GgbCommand>
    <GgbCommand color="red">P_8 = (1.27491,0.50176)</GgbCommand>
    <GgbCommand color="red">P_10 = (3.55687,-2.64661)</GgbCommand>
</GgbGraph>

Cancello un oggetto da un insieme e contemporaneamente faccio un quadratino finché non termino gli oggetti, ottengo due colonne.

>
> Se ora congiungo gli estremi delle colonne ottengo che le congiungenti si intersecano dove c'è l'insieme più piccolo.
>
> [Il più piccolo è sempre verso la punta]{.text-red}

Ottengo il simbolo maggiore

***

Il simbolo minore

***

Il simbolo uguale