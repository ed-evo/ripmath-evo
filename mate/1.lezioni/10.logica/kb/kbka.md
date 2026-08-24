# dimostrazione prima legge di De Morgan

La **prima legge di Morgan** dice:

$$
\overline{p \lor q} \equiv \bar{p} \land \bar{q}
$$

Costruisco le loro tavole di verità di $r$ partendo dalle proposizioni elementari $p$ e $q$:

### 1)

| $p$ | $q$ | $p \lor q$ | $\overline{p \lor q}$ |
| :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} |

> - Prima scrivo i valori possibili di $p$ e $q$; per fare in fretta:
>   - in $p$: due veri e due falsi
>   - in $q$: vero, falso, vero, falso alternati
> - Nella terza colonna la disgiunzione inclusiva di $p$ e $q$: vero se almeno una è vera
> - Ed infine nell'ultima colonna la negazione della precedente: vero diventa falso e falso diventa vero

### 2)

| $p$ | $q$ | $\bar{p}$ | $\bar{q}$ | $\bar{p} \land \bar{q}$ |
| :---: | :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |

> - Prima scrivo i valori possibili di $p$ e $q$; per fare in fretta:
>   - in $p$: due veri e due falsi
>   - in $q$: vero, falso, vero, falso alternati
> - Nella terza colonna la negazione di $p$: vero diventa falso e falso diventa vero
> - Nella quarta colonna la negazione di $q$: vero diventa falso e falso diventa vero
> - Ed infine nell'ultima colonna la congiunzione logica delle due precedenti: vero solo se entrambe sono vere

Se controlli i risultati vedi che le due proposizioni considerate sono **equiveridiche** come volevamo.