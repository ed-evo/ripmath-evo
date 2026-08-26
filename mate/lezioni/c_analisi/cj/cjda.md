# Troviamo le costanti

metti la pagina a tutto schermo altrimenti le formule si vedono male

***

Partiamo dall'espressione (senza considerare il resto)

Quando $x$ tende ad $a$ i termini dopo l'uguale, a parte il primo, sono infinitesimi ([per un ripasso clicca e guarda in fondo alla pagina](../cd/cdgbb.html)) del primo, secondo, terzo... ordine, quindi posso considerarli come zeri; indico in blu i termini o nulli o infinitesimi.

$$
\textcolor{red}{f(x) = f(a) +} \textcolor{blue}{(x-a)f'(a) + (x-a)^2f''(a) + (x-a)^3f'''(a) + (x-a)^4f^{IV}(a) + \dots}
$$

faccio la derivata prima [calcoli](cjdaa.html)

$$
\textcolor{red}{f'(x) =} \textcolor{blue}{0} + f'(a) + \textcolor{blue}{2(x-a)f''(a) + 3(x-a)^2f'''(a) + 4(x-a)^3f^{IV}(a) + \dots}
$$

Ho quindi $f'(x) = f'(a)$ che è giusto.

faccio la derivata seconda [calcoli](cjdab.html)

$$
\textcolor{red}{f''(x) =} \textcolor{blue}{0 + 0} + 2f''(a) + \textcolor{blue}{6(x-a)f'''(a) + 12(x-a)^2f^{IV}(a) + \dots}
$$

Nella derivata seconda ho $f''(x) = 2f''(a)$ mentre dovrei avere $f''(x) = f''(a)$ quindi perché sia valida l'uguaglianza il terzo termine dopo l'uguale va diviso per $2$.

faccio la derivata terza [calcoli](cjdac.html)

$$
\textcolor{red}{f'''(x) =} \textcolor{blue}{0 + 0 + 0} + 6f'''(a) + \textcolor{blue}{24(x-a)f^{IV}(a) + \dots}
$$

Nella derivata terza ho $f'''(x) = 6f'''(a)$ mentre dovrei avere $f'''(x) = f'''(a)$ quindi perché sia valida l'uguaglianza il quarto termine dopo l'uguale va diviso per $6$ e siccome avevo diviso per due il termine precedente questo va diviso per $6 = 2 \cdot 3$.

faccio la derivata quarta

$$
\textcolor{red}{f^{IV}(x) =} \textcolor{blue}{0 + 0 + 0 + 0} + 24f^{IV}(a) + \dots
$$

Nella derivata quarta ho $f^{IV}(x) = 24f^{IV}(a)$ mentre dovrei avere $f^{IV}(x) = f^{IV}(a)$ quindi perché sia valida l'uguaglianza il quinto termine dopo l'uguale va diviso per $24$ e siccome avevo diviso per sei il termine precedente questo va diviso per $24 = 2 \cdot 3 \cdot 4$.

il prossimo termine dovrà quindi essere diviso per $2 \cdot 3 \cdot 4 \cdot 5$
quello dopo per $2 \cdot 3 \cdot 4 \cdot 5 \cdot 6$
eccetera

***

Quindi la formula di Taylor è

$$
\textcolor{red}{f(x) = f(a) + (x-a)f'(a) + \frac{(x-a)^2}{2}f''(a) + \frac{(x-a)^3}{2 \cdot 3}f'''(a) + \frac{(x-a)^4}{2 \cdot 3 \cdot 4}f^{IV}(a) + \dots}
$$

o, meglio ancora, per omogeneità mettiamo anche l'uno

$$
\textcolor{red}{f(x) = f(a) + \frac{(x-a)}{1}f'(a) + \frac{(x-a)^2}{1 \cdot 2}f''(a) + \frac{(x-a)^3}{1 \cdot 2 \cdot 3}f'''(a) + \frac{(x-a)^4}{1 \cdot 2 \cdot 3 \cdot 4}f^{IV}(a) + \dots}
$$