# Equazione della retta perpendicolare ad una retta data e passante per un punto assegnato

Ho le coordinate di un punto [$A = (x_1, y_1)$]{.text-blue} e l'equazione di una retta (non passante per il punto) [$y = m_1x + q$]{.text-blue}.
Voglio trovare l'equazione della retta passante per il punto e perpendicolare alla retta data.

Prima facciamo il fascio di rette che passa per il punto [$A = (x_1, y_1)$]{.text-blue}:

$$
y - y_1 = m(x - x_1)
$$

Poi tra tutte queste scegliamo quella che ha coefficiente angolare inverso ed opposto della retta data [$m = -1/m_1$]{.text-blue}.

Quindi la formula finale è:

$$
y - y_1 = -1/m_1(x - x_1)
$$

> In pratica seguiamo quello che facciamo quando, in geometria, tracciamo per un punto una retta perpendicolare ad una retta data: posizioniamo la riga sul punto ruotandola leggermente (fascio di rette) finché non è perpendicolare (coefficiente angolare opposto ed inverso) con la retta data, poi tracciamo la perpendicolare.

Vediamo un semplice esempio: trovare l'equazione della retta passante per il punto [$A(-4, 3)$]{.text-blue} e perpendicolare alla retta [$y = 4x + 3$]{.text-blue}.

Ho:
[$x_1 = -4$]{.text-red}
[$y_1 = 3$]{.text-red}
[$m_1 = 4$]{.text-red}

Applico la formula:
[$y - y_1 = -1/m_1(x - x_1)$]{.text-red}

[$y - 3 = -1/4 (x + 4)$]{.text-red}
[$y - 3 = -1/4 x - 1$]{.text-red}
[$y = -1/4 x - 1 + 3$]{.text-red}
[$y = -1/4 x + 2$]{.text-red}

> È sempre buona norma rappresentare il problema geometricamente per poi poter controllare l'esattezza dei risultati. La retta cercata taglia l'asse $y$ nel punto $2$ ed è diretta dall'alto verso il basso con inclinazione $1/4$ (ogni $4$ spazi su $x$ si ha uno spazio su $y$).