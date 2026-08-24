# [Numeri di Gödel]{.text-red}

Consideriamo la tabella dell'alfabeto che abbiamo visto precedentemente ed associamo ad ogni termine dell'alfabeto un numero dispari partendo da $3$ (si indica con $g(\text{simbolo})$).

| Simbolo | Significato | Valore |
| :---: | :---: | :---: |
| [$1$]{.text-red} | [uno]{.text-red} | [$g(1) = 3$]{.text-red} |
| [$'$]{.text-red} | [successivo]{.text-red} | [$g(') = 5$]{.text-red} |
| [$($]{.text-red} | [parentesi aperta]{.text-red} | [$g(() = 7$]{.text-red} |
| [$)$]{.text-red} | [parentesi chiusa]{.text-red} | [$g()) = 9$]{.text-red} |
| [$+$]{.text-red} | [addizione]{.text-red} | [$g(+) = 11$]{.text-red} |
| [$=$]{.text-red} | [uguaglianza]{.text-red} | [$g(=) = 13$]{.text-red} |
| [$x$]{.text-red} | [variabile]{.text-red} | [$g(x) = 15$]{.text-red} |
| [$\cdot$]{.text-red} | [prodotto]{.text-red} | [$g(\cdot) = 17$]{.text-red} |
| [$\dots$]{.text-red} | [$\dots$]{.text-red} | [$\dots$]{.text-red} |
| [simbolo]{.text-red} | [significato]{.text-red} | [$g(\text{simbolo}) = 2n + 1$]{.text-red} |

Considero poi l'insieme dei numeri primi partendo da $2$:
[**$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \dots$**]{.text-blue}

Costruiamo ora un numero considerando per ogni simbolo come base un numero primo e come esponente il numero $g(\text{simbolo})$ visto sopra.
Quindi l'espressione considerata nella pagina precedente
[**$x + 6 = 2(x + 2)$**]{.text-red}
cioè
[**$x + 1''''' = 1' \cdot (x + 1')$**]{.text-red}
diventa il numero (per ovvie ragioni non lo calcolo):

$$
\textcolor{red}{2^{15} \cdot 3^{11} \cdot 5^{3} \cdot 7^{5} \cdot 11^{5} \cdot 13^{5} \cdot 17^{5} \cdot 19^{5} \cdot 23^{13} \cdot 29^{3} \cdot 31^{5} \cdot 37^{17} \cdot 41^{7} \cdot 43^{15} \cdot 47^{13} \cdot 53^{3} \cdot 59^{5} \cdot 61^{9}}
$$

Il numero primo mi rappresenta il posto in cui si trova il simbolo e l'esponente mi indica di che simbolo si tratti.
