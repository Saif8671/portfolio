import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Portfolio = ({ darkMode }: PortfolioProps) => {
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    {
      title: 'Hand-gesture controller',
      description: 'Machine learning-based system for detecting network anomalies and suspicious behavior patterns in security logs',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBIVDxAVDxUQDxUVEBUVFxoVFRUXFxUVFRUYHSggGBonGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0vLS0tLS0vLy0rLS0tKy0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIEBQMGB//EAEQQAAICAQIEAwUDCAcHBQAAAAECAAMRBCEFEjFBUWFxEyIyQoEjUpEGFGKhscHR8DNDY3KDkrIHJDRzgpOiU8LD0uH/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EADMRAAICAQIDBQgBBAMBAAAAAAABAgMRBDESIUEFEzJRYSJxgZGhsdHw4RQjQsEGM2JS/9oADAMBAAIRAxEAPwC0/U+s8HLdn0GPhQpiZBACAOCAgBIA4ICQBwB4ggcgBBAwIA8SCAgBiMgMRkBiABEkCxBIoApJIEQBQSIyQEEikgIAQBQSEAIAQAgBACAEAIA36n1mUt2Yx8KFMTIIA4ICAEAcgAJBA4A4IHIAwIIGBIIHBA8SBkMQQOAGIAsQSGJIFiCSJEkCMEikkgRAFBIpIFBISQEAUAIJCAEAIAQAgBACAN+p9ZlLdmMfChTEyCAOCAgAJAHBA5AGIICASEhkDkEEgJBAwIIHiQAxBGR4gZDEDIsQMiMEiIkgRkkiMkkjBIpJIjBIoASSRSQEAIAoJCAEAIAQAgBACAN+p9ZlLdmMfChTEyCAOCAgDkAJBA4A4IHAJCQQMSDEkJAGBIMSQEggeIAYjJA8QBGCSJEkkRgkjJApJkRMkkUEiMkCgkUkCgkJICAKCQgBACAEAIAQAgDfqfWZS3ZjHwoUxMgggcAIA5ACCBiQBwQOQQSEhkEhIIJCQQSEggYEGLJCQQx4kEZDEDIiJJkRMkkiZJJEyUSIySSJkkkYJFJJFBIjJAjBISQEAUEhACAEAIAQAgBAG/U+syluzGPhQpiZAIA4ICAOQQEAYkAlBAxIIHIILen0Frrzqvu9MnYfSW6dFdbHiiuRVs1VcJcLfM3OFfk8Cpa3dsZC5wAPM+PlOzoex444reb8jlavtTheIvC8zC1SH2jLWjMgOCQCcH16TDU9k1vKhyf0N1Otf+TyIKe+3qZzF2ZdxYeEWnq6xrgkKDkk4AAzLlXYrnLHF9DRZrlFNkNXY1VnsnXDYGBnffp0lm3/AI3LaDbK9Xatc1lNY950zuQQQR1BGDOLrNBbpWlPqX6b4WrMWIiU8FjJEiTgyyRIk4JImDIiZJJEySSMEikkigkRkgIJFJAQBQSEAIAQAgBACAEAb9T6zKW7MY+FCmJkAgDggIA5BAQBiQBwQMQQaHD+HNYQzArV1LYxnyXzl7S6Gdsk5LCKOp1ca1iPNmzXxTnotalVqqrGNM7/AAOV+IkdRWCMc3c5Pbf2tUaq4xhJfBfu55K3vrreOEsJfX+DznCeLXcRuI5jp661Btr5t/eHxH7yncL27nwEKbp8O76/695scI6hf3FyXT96FxeHWq/stJb/ALvuTRa5IXf+ps3Yf3DkeGIrS1OXPl6oaiz+jhx7ry/B5PWcTu9o9VaBChKsbG3B8kXdh55E1X6aNTw3n3FirVytXsLHv/BzoW0sGZ3sYEEAe6oPkq/vzMI6h1e1FYM5adWcpvPoa706i2+u9kWy1SpUkLty7iYR7crzyfLyIfZFarceBJHobEZmNluDYwGQuwAAwAJx+1dVHUySWyL2g0y01fDE4sM7ATjcGXhHSTxuWKdNjcy1Xp8c2ap2eRz1FS+GPSRbXHyMoSaKFiYlKUMFqMsnIzDBmRMGRGCRSSRQSIyQKCQkgIAjBIQAgBACAEAIAQBv1PrMpbsxj4UKYmQCAOCAgDkABIIHAHBBd0lSKp1F5xSp2GCS7Z2VQNzvgbdc4Hl1ezdC7pKT2/foczX61Ux4Vv8Av1LfEuJ26mteSn7CvbWVq6q+Nvsq3+FnA+IbYBwDme0caIRwnl9PL3nkI/1Upy4tvJbr0z9ylbrzxErXp1/3ZSqKoGMkDbmX5a1HY9ceAmiVdlacsc318i5VKu3l/iunVv8ABZ/KDQ01VoUb2V9WeS5R7xLfErD50bA9w+AxggEV6854Fz/dzdYljjfJmO+k1PINXaOQ5wig7LkYLDfJJ3Ge3T1vSqdMH3UveypTfC67u7V7S2Xl6mbqtOOQ3WqWx8ONiCe/N2EpQt4Zp2Pfp5l6ypTXJbdQ41rqLBpk05f2gQF87AsOXsNuYHJ+ol/VQrlU+HHw8ihopaiu1xufqmes4daPZhvnI9/yPcTxd2mWmk4/E9HXb36yjpuxmhRc2WOUS9p9Hjczo1aTlzKs78vCOllc3yo8jGMyjehlK2llmEkUXQmUZVtssqSRC/TFRzdu8wt00oR4jKFqbwVTKxvRGCRQSKCRSQIwSEkBAEYJCAEAIAQAgBACAN+p9ZlLdmMfChTEyCAOCAgBIA4IHAL2k0Y5GvtPJQgJZvHHUD+P0G86eg7Ns1DTxy+5zdbr4UJpPn9itq7L7mRAppsK81SY/wCGoOQLnHT27DIRe2ST0OfU92qK8Jfyeb43fZyf8e/1K9wOoVdJpwV0VZ9m/KSTa4PvVhurDPxt8xyPGaXJx9p7vp5G6NakuFeHqa6cVHDmCWhVDaZ7biF3B56q6ahy/Exy+BvuNpdhY3Th75+BUuph/VRsTxhMy7brLT7e4ch/q6855AfveL+Ph0EpzsSzCv5l6qpvE5r3LyM3Vay1vZZY+xS5RYCTyhbDycx8AGZd5vrvlKDg/I1X1QhONqXX6M2EsRx7nvJuo2642Jx5zyfat03qMeW35O9oqkq+e73OHDeCUC32likovvoF6hsdNt8EZH1E7/Y/aVcoONjxLbmcXtjRXOC7jfJe0lJ52Kgqh+FT18s+cq9qXVW2KEOZd7PqshDis5M39FpsbxpdPhGd1mXg1tPoi3QTsQojFcyjO5RLD8IbHaZ8NbNa1aMjWaIgkESrfpU1lF6q9NZK1WhyZQWk5m6V/ItXadeRkPcYlidEe7cPQ0RsfEpI8hYpBIPUHB+k8fODi8M70HmKZCYmwiYJCAKSBQSEkBAFBIQAgBACAEAIAQBv1PrMpbsxj4UKYmQQBwQEAJAHBB30Wma11rXqxx6DufoMmbqKnbNQXU032qqDm+h6TW8aWj29aVrZTp1rprU7mzWWYNdQ/ugqxPYsT8s95p4xqrUdv9L+TweoUr7ePO3Tzfr7ideor1DvprFLW+wVtU9eVALDAXmzkM2+PBV8xN3eRceL5ILT2V8NcH6yf+i1ptAlKhKlVWC4UDYKvQKolSNfeSbyXbr4Uwy+UTzmurpYC6+kLqkJCEtzFRluvbmw3bpk7+NrUWwhW6ovkV9LRbPUd/PbHJHn9fq87Ccg7DJXaN76Rp1IRLdrPMn4Sx+6Os2abUVy1Hd55ow1FElQ54ymjRHCH0n2bsHPKGyNtyN9u05n/IKa4zjKBZ7Fustp4pxwdaj2E4VbeyOtLzNXRU46zr6WrG5RumbOkGSJ6HTRKFrwj09NYUACbJPLONOXEycgxKHEV5uw26knH06TODextjb3SyzC0usR+ZQOV1OCCf1gzU2k2up0VlpM5aiyU7ZYLNcTy2v/AKR/XP4gGeX1a/uy/eh2qPAisZVN6FBIpIFBISQEAUAIJCAEAIAQAgBACAN+p9ZlLdmMfChTEyCAAgDggIARghnpeHKNFpn1brzWuFShO7M7BakHmzlfpPTdkaPhXHLd/Y8z2trOJ8Edl9WYwtCFcfbmmx6qf7bXWk+3t9ASy57AP5TsWe17Pnzfu8jlVLhXHu9l6vzNuk18PoZnYGxibb7DtzWH4mPkMAAdgAJplJzlhfAtxioQbl72zI0N11tn51aWTGfzevOOUHrY4++RsB8o8yZPfupOMeu5jGlWtTmuS2X+ynxfUdd5WcnLmy5FYSRi01l2A895rtsVcHN9DZXHjkkbiHGMbTyjslxcfU7qgksE2sJ6nMmy2djzN5CilsXNAgOT4GWdNFNZK1zxyNBLcTp1zwyq45Ro6G7BHrO5o5J8ipdDKPW02BgCPCbZLDwcOUWng6SDAxeKU59qh95HXcHzGPwmpzlCWUWq4xmsM+e02W1O9LE+1rwysfnqPwP5nqreYPjNc05e2uv0LtLx/bfT7GyNYLFDDbxHge4lG6T6nQrWdjE1bZdj5zz2oeZtnVqWInAzQbhQB8h642m7+nsa4uF4MHOKeGyM1YwZhBIQBQSEAIAQAgBACAEAIA36n1mUt2Yx8KFMTIIAQBwQEA1/yb4V7ezmYfZIct5nsv8AGdLs7S99Pil4Uc3tHVd1Dhj4n9CH5Y8VazULVU3KaCa6jthdTZXmy4+VGnYtvtz3oO09ZFcETyksznhHP8l6Kwo1jfZ6aur2eiDHpSBvc2fmfGcnflx4maZyfNdc8/eWqoLxdEuX5Kq2trrBe+2nBzp0PzY6WsPD7o+vhMJS7vkt+pnGLtfE/Ctl+TTusAE0FjfmeZ4lZuZJkPhi9TOd2pLFSXqXdCs2ZNCefOsAMAs6W3BI8Zvpnw8jTZDJZF0uRsNPAXtLfnHj/OPSdbTXFWyHCej4Zq2Ax1E7cZqaOVqKYt5NJtd5RwIpqgz9Rq8nJ9D6d5rtxgtQpwuRQ1egrz7b2YtsVG9lk4zzYypPgcD0wDMdPZGCalsytqq7LEnW8SX7g8nTcHX21IIUkrYhGGR12ZGHZgf53lHW18Uml8Dq6W5YT+ZULTylkZRlwyXM9BBprkavA+D/AJxlmbkQZ6dTjridTs3s5aj2p7HO7R7QWmjyWWceIaJa2DIfaVZyCpzkA+MvXdlV1zWOhWp7SlZDiXVFvWflGhREqoFiLUXtVB9oFVgrGtce8RzKSvUjON9j2oRqdODjW9/XqePOU0ZeqVDyWIwapwGR13Ug9DtOFq9Ap848mdzS63C80aR4fo/ZKw1ADsQq82FBZiQq79CSDgGWo9h1urPMpz7clDUd1JY+3zMvWaR6jhht49pw9R2dZVzXNHbo1sLOT5Mrzn4LoQAgBACAEAIAQAgDfqfWZS3ZjHwoUxMggBACAd9FpXuda0GWY/QDuT5ATdRTK2ajE0X3Rpg5SPba+5OHaR2UZ5FwgJxz2scKD6sR6D0nsNNQq4quOx5DU3uyTsluz5xwXhjayzlck1lefUue9TubGXrs19mXbwqVB4S1a8L93K9EcvC67+7+fsXOKa38/sFabaCtu2wuZf8A4gf8x8hvWm+Bc9/sXYrvX/5+/wDBau1XKMCVyyVH1BMkgzNae8Ek+DvnnHgROV2r4InQ7P8AEzSzOEdUeYAwZKZGDtWxM3wbZhJYNjh+nJxO3pa2zn32I3a25RO1FqKOY1xMhZqZhK4yjUUb9TKll5ZhUdeF8QBPsWPX4D5+E1U6hN8LNWp07S44/EyOO6FtNadZUpZGAGuqUZLINhci97EHUfMoI6hZcilL2H8CjxcHtx26/k4a7QqVFtW6sodSDkMDuCPpKer0fFHhmsM6Om1WOcXyO3BtcFVUO2SQPAnw9ZhoW64cPVGWrUbJZWzMGoNo7NTXu+mR/aWpuSlVuSmorHdQQ6Oo/wDTDDfIPXm++Sb3Zxqs0SaW3kGsDaa7T3p7yF+XKnYrYuxB77hcTVVXJ8UVvuWrJRzGXw+ZoewUc1tA5qLCX1FIHRj8V1I7N95O/Ub55pglP2ZbmualS+OO3VGaNP8AaXkct1DLWjAjmRlKlsH6OJnZKyuKiZVuuyUn0wjVp1Xs0CMGvoxgb89lY9etqf8AkPOIqN/L/L7mLU9P7S5x+q/JV4tpDp2XmGEYZXyB/d5dpyO0OycLihudfQdpRsjyeV5nCedlFp4Z2k8rITEkIAQAgBACAEAb9T6zKW7MY+FCmJkEAIBKtCxCqCzE4AHUmZRg5NJGMpqKbex738nODDTpzNvaw94+A+6J6jQ6NURy92eW12sd88LZbHkvy71ranUV6NBzrWcuufisYYCk9gFJyewZj2ncpr4YObONbLimoIqaofZnSVN9lzE6y0bG2w/Gi+C9j4ABR5VbZ8PtPd7IvVV8XsrZbvzIBggwBgAYAHT0AlLOebLyWFgpM5YySTpYMCCDM1bwCtpNX7JySMqes0aijvq3E20W93NM36NQjjKkGecu09lb5o7dd0JrkzrNKi2bOJIiLAdhufLeWK9HdPwxNU9TVDdlmqljvsvqf4TpU9i3Pm5JfUo2dqVLkotm1oeIcgw+D+kp/aDO9RpZQjhyTZy7dUpPPCyw/Ea+nMAe2Tj9s13RnDm9jbVOE9mcLdUPEfjOdO+PmXY1vyKF+sHjmUbNSuhahSyjZeT5dxj9soyubeSwq0lhnrOD8SGoTlb+mUb/AKQ+8P3z0Gg1fer/ANLf1OBq9M6ZZXhf0KXHda9bKWUDT45Tyjes5+L/AJZz/wBPpOrZYro8K8X3Odp6v6ZtrnF/T+DJ1dQUk/1b4zjfB7MPMTn45+qOpnKz0O+l09ll2ntUj2lfNXdvs+nfqw8cMqN/m8Zd00ONSTZQ11ipXevpyfuLmn0yaEshVW0bNlMgMNPYTkFf7Et/lJ7A7Xanhtf5fdeRz9TXxw9l4i8NPyZlaRNTW1nPXytW2bVUHkKn4bam7qfDqDkHz0zp4p95HwnQp1Ecd1J+19/cagZLWY6P2SIUL6iuwEe9sOdSOh8dt+vaXF3dsEp55bYObYtRo27VzTexjcSpSulLktAuLHmrVgwHXcEftx3mm2quvLW62Zf0uottk4yhhfQ87dxi7UPYtzl+Uhkz2Vh/9g34ypqLnOMcG7SUwpnOEV1z8GXtDZkcp6jp6TzXaOnw+8Wx6DR25XCy1OSXwgBACAEAIAQBv1PrMpbsxj4UKYmQQBScEZPbfklwj2a+2sH2jD3AflX+J/nvPR9maRVx7yS5s812lq3ZPu4vkjQ/KbjNeh012psI9xfdH3nJ5UX6sROzBZkkcmTwmz5j+TXtLuewk+1clr7O6K/vci+Frggn7qkdziWtRcopLy2NGlqlJt+e/u9DX1HKoAUcqgYUDsJyJzcpcT3O1CCjHhRk6myQjI40viZAd98EYM6w5MBFinSA9ZD9ScnQaSsHIO/lIfPyYTxsdM1j4jgfpNgfrhVrol8hK3Hil9TtRxDTZCi1CfBWDfqXM316eyTxgry1VS/yX3NPjijSBOfJ5l5hyo5/HAlizSOKyn+/MrU9oVWbZ+T/AAeZ1PHx25/+0/8ACV+5l5r5osf1MPJ/J/gtcB1P55YtLO6BvGl+XpnqwxmW6KHJPL+qK2p1kKo8Si/ky/7A02WU8/tFU+6313H7J53tvSwqkpRW53+ydQ7Yc/5OhM4OTsYLvBtGt9y1s3KDk7dTgZwPOWdHTG61Qk8FXWXypqc4o2+LcBOnxdpSeZN2HNlh5+Ynet7KjWlOp4aOLR2n3zddqyup202qTVocAC0D7RP3gdxM6rXYsYxJdDGyvu35xez/ACY11P5vs3/Dk4yf6onsf7M+Py+kttd+v/S+v8mhS7h8/C/p/Bb0OlFb8wJBGeXfx64mmFkoFicYzWHzRZ4Rw1UscK4XTuCbKXwVBPU15+EHJyvTwxL9ditWZeLzOdfVOpLu1mL3Xl7ha7X16agUrYTzMUrBGeVTnFfMRsMAAb79O0szknFzWOXl+DRVVKN6Vi9no/L0Z4bV8yMT2PWcuF04viiztSri1wyRnaO0+9UxyU+HzQ/Cfpuv/TM7pSl7Wd/uadOuHNb6beq6Fa33L627OrVn1Hvr+xvxmC5wa8sMyl7NsZeeV+P9mtU2CCJXnBTjwstRk4vKNGtwRkTzeo07pnh/A7VVqsjlEpXNoQAgBACAEAb9T6zKW7MY+FCmJkTpqZ2VFGWYgKPMzOFbnJRj1MJ2RhFyl0PYaLgdGn5Ws+1tG+/wg+S9/rPRUaCqnDlzZ527XW3ZUeUTYTWk9BOiptnPdaR88/2gaXUcT1VOhQlKKcX6qzGwZtlAzsWCk4Hi/wCjLcU6occlvsVJ4snwR2W5btu0ukrWpXrqRQfitXJJ3LMScsxOSSepMpTU59GdGDhWsJmJfx3TN8Nq2H9AF/8ASDMVVPqZu+tdSq2pDfCrn/DZf9WJmqcbtGP9QntF/IQLfdP1IEy7utbzHe2PaD+JPRn7RPaAez5hz7nOM7426zdR3Cllt/LBquWocHwpJ+/JPj9dZtJ0zBKtse5k579T4zPUyq8sv3mvTQ1PD/ckvgjN/NmPW+w+nKv7FzKneJbRRa7qXWb+n4EOH09XLv8A3rrGH4c2JHey9Pkh3EOufmxpXp0P2dFfN4itSf2ZkSvklzkZR08OkfoXKnv+VeXw6L+qU5a6qDy5FqOjskuUSd9Gotx7SwYAA6k7CYXdtRksc2bq+zJR9BLwdMYZmPpgTnz7Usb9lItR7Ph1bJ1cKrXoW/Efwhdr3x8OES+zq2sNsuV1BekqajV26h5sZZq08KvAicrG4lVayMrKcMpDKfMTOubhNSXQxnBTi4y2Z6nUa/HsNf0qYDT6weClsCw/3XP+Vz4T2Wm1H9RSv3meN1NP9Pa15FDjtR09otr91w2+Okp21ZfLdbHRpsTjiWzNuixNTULAAQw5XXrv8wI8P4zfVPjXGt+voyvZHu263t90Zun0b0EpgvpsZrbqav7N87lPut26HoJcVPfx4lv19Sp3607Sk/Z6GdrOI4JC9JSacXg6ccNZMrUsLAVfdT1EmM5RaaInXGceFlKtySaLTl8E1N99R/7h3H1mdkU1xx26mqqTi+7nv09xkcSQ1Fbe9Zw/nWfi/DZvpJreVwsXey1NdPsLiy/Z8435Cto9FOT/AOOfxk1ePhfuJ1P/AF8S6cy7Q80tG9PKyWabORv0T18jKmroVtb81sWNNa4S95fnm2sHaCAEAIAQAgDfqfWZS3ZjHwoUjBOT1/5KcJ9mv5xYPeI+yB7Kfm9T+z1noOzdJwR72S59Dz3aOr7yXdQ2W5cuyzToPm+ZUXJFfievagIlQD6m0laFPQY+K2zHStQQT4nAG5lmmKT4nsirfY/DHd7f7KvGtPTaF9si3MFAZmHU9yVzjrmZW6mT5R2MdNoa6ljfO55fUVaes/Z01p/dqUfsEqOcnuy/GqEdkUL9c3QbSOfmZ4XkVG1LeMYGSH50ZIyQbUwDk1xOw6yG0txjL5FivR3Hty+px+rrKk9fTHlnJZho7ZdC1Twvu7Z8l/iZSt7U/wDhfMtV9n88zZoVVKgwoAH89ZzLLp2PMmX4VRgsRROajYEAIAQAgBBIoRB6b8lmWynU0WAPWfiU7gq6lWB8tv1zv9kWPha8nk4Pa9WZxfmsHDWcMsSiuq2wWWIpVDn3nqU4rc56ty8obHzZ8Z3dRRHHHHb/AGcjR6l8cqZLmvqilwPXHTWcr/0Te6/l4N9JzYQ4Z8Ueu6Ola+OHC+m34PRa3UOnMgPusuD0IIMtxvdb5IrdxC1e0snitdwx6stp2Dr3oZsf9pz8J/RO3msd6rfHv5/knu5Vf9e3l+Crp9Qr83LnmXaxGHK6HwdD09eh7EzVKDiboWKe2/l1Fq6BavKSUYHmrcfErDow/h3GREJ8L+4tqU1jr0KyWm5WSwBdRXtao6EHo6eKN+rcdplNcLzHYxrs4swnutyhoRgPQ3y7L51np+G4+kzn0mv1mFS5Sql029zJ6DPIoPVfcPqpx+6RavbM9M81pPplfIun3hiaTeXdHZzKM9RsZwNfTwW5WzOvpbOOB3lAtBACAEAIA36n1mUtzCOyN38meC+2YW2D7FTsD8xHb08fw8Z0+ztF3ku8n4V9Tl9o63u13cPE9/Q9hqLOwnoWzgxRl8S1telqa+3JAwEVRlndjhK0HdmYgAecmEMsmyfDHkZWiR0D36jB1NuPaBTla0Hw0oe6r3PzHJiyfLC2FNePae7MvieuzkCV8lxLBgahyYMio6/U9pLaSyEm3hHWvh7Hdjy+XUzmXdpQi8RWS9XoJy8TwdhwxO5Y/USrLtS3okWF2fX1bJrw6ods+rGaZdoXy6mxaGpdCxXSq/CoX0ErzunPxNssQqhHZE5qybAgBACAEAIAQAgBACAWuG65qX5hupHK4z1X+Ms6bUOmeenUranTq6GOvQ2+KaFdXUjo5VlbmotUe8j43BHgehU7EfQz09WqcoJxeYs87bQuLhaxJfvyMrTfbc1NqirUoPtE+Vh0FtZ7ofxB2MTikuJbE1Wt8pcmbdAJoUP8dZKZ8V+X9Rx9Ji/CSvZnyMjVVbzA37GdreHpbgnKWKMV2IcOvkD3X9E5B8JsjNx5bo1TqUuezKFxer+nwBnAuUYrPh7Qf1R8/h8x0mzhjPw/Iw72UHizkvP8nLWadiVdfduTPs27EHqjeKn+B7SISxmMtjK2HElKG/3KWqw3LegKlSVtXuPvKfTY/SbYRw3B7PZ/Y0SnlK1bx393UVJ95x44cfXY/rH65jZ4Iv3o20tKySWz5r4ndZpLR20tvK2D0P7ZT1tHe18t0WNNZwT57M0p53HPmdhMJACAEAIBucB4EdQxd8rSG9C2/QeXif5HV0egdsuOfh+5ydbr1THgh4vsez2UBVAVQMADoBPQrEVhbHA5t5e5wtZVBdyAoBJJOAANyTJSJyeUSw6m0ay0EVpkaGs9gRhtQw++w2UfKp8WOMrWorh+ZFMXN8b+H5K3Edd2Eqt5LsY4MS18wZldhk8o3P8AO5mF1sao8UjOut2PhRapoC+Z7mecv1U7nz2O1Tp41LkdZWLAQAgBACAEAIAQAgBACAEAIAQAgFzhnEX07ErhlOzoejD9x85Z02plTLlzXkVdTpY3x58mtmbet0VerrW6liliEmtse9W3dWHzKe46EfQj0un1ClHijzT3X71PPX0yUuGfKS2f70I6C97FdHTltTHtVG48nU90PY/Q9JvlpmlxQ5xfUxrvjKXDLlLy815lbVLiVS0UmIkkiFmOu47ydhhNYKD8OCj/AHfHL3pY4X/Db+rPl8PpNqsjLlP5lZ1zrea9vLoZzJ7zNWCbAMXVMMOV8CO564YbHpmbksJKe3RmpyUm5w3W8fNGVWwWxADlN1Q+KOCUz5hkKETZZFuDzvv8TTRYlZHG2y9z2+WxrUVE/wA7/wD5KWTrI62aPIkZJwGn1HL7jnB+U+PlORrdG88cF8C/ptR/jIuTkYOgEAIAQD6gxAAVRgAYAHSe35JYWx4lLq9xAY3MDJ5XietXVuyA501b8tp7WWKd6x4qp+LxIx2M2cXdR4uv29TGMO9lj/H7lDiGuzsJTbyzoKJi22ZhIzK1r46bk7ARKSgm2Sk20ixp6eUeLH4jPN6rUu6XodvT0KqPqdZULIQAgBACAEAIAQAgBACAEAIAQAgBACAXuEcQNDk9UYcrjy7EeY/nrLek1Lpl6PcqavTd9H1Wx6KjXK9bKpDBhg4JBGR4jcT02m10eH2P34HntToFOadi5rYwNXoB8ttyf4pb9T5mb1HE/ain++gWnwvZk1++pl26e8fDfn+/Sp/0lZHHW94/Inu7VtP5o4s+sXtRb9bK/wBzSP7XTKMk715P6CGrvHxaZj/y7a2/1cpjgi/8vmT3tq3g/gyWovrsA9tXdWw/o3FTBlP6Lpn8OhmdcJLwtP0NNk4T8Safnjn9Dz1vDr79RWtJWxuf2mR7meUhiXQ/ATyjONiRnY5E6ulpU4tS5fU4mu1K07VjPX3ab2TENsQcTj3V93PB6am1WQU47NZBk2mk2mXxID6zJbYDHodTn3G6/KfHynG1+l4f7kS/pb8+wy7OUXwgBAPpyz2yPFPYwf8AaFrLKdBrLKmNdi6dijDqD0yPA7zNbmD8BkW0rTWlVQCVogVFHQACV7W+NlyhJJR6GNeZgjeVTMkDnpd3YnsNpzu0m1UvVl3QpO3n5F6cA7AQAgBACAEAIAQAgBACAEAIAQAgBACAEAIA0Yg5BIPiDiZxk4vKMJRUuTNvROXqDNufGeg0knKrMjjamKjZhFbUIJZRoKNkkknVGM7k4wdR1PkNowE2dKLWU5UkHsQZZ08nFvBhbVCyOJpMwtDYfzjV15JRHRkBOcF15mxnxPabNX7WGyvokoynBbLZGy492UmXkZGsElBma2x2hpNPPkE8SRtVnIHoJ5SxYkzuQ8KJTAyCAf/Z',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Saif8671',
      category: 'Machine Learning',
    },
    {
      title: 'keylogger Analysis Tool',
      description: 'Security log parsing and analysis tool with pattern recognition for threat identification',
      image: 'https://f.hubspotusercontent40.net/hubfs/4650993/Blog_Content/Avg/Signal/AVG%20Signal%20Images/Keyloggers%20What%20They%20Are/What_is_a_Keylogger-Thumb.jpg',
      technologies: ['Python', 'Log Parsing', 'Pattern Recognition', 'Pandas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Saif8671',
      category: 'cybersecurity',
    },
    {
      title: 'SIEM Dashboard',
      description: 'Security Information and Event Management dashboard for real-time threat monitoring and analytics',
      image: 'https://www.slideteam.net/media/catalog/product/cache/1280x720/s/e/security_information_and_event_management_dashboard_siem_for_security_analysis_slide01.jpg',
      technologies: ['Python', 'Flask', 'D3.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Saif8671',
      category: 'Dashboard',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Network vulnerability assessment tool with automated scanning and risk evaluation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Nmap', 'Security Testing', 'Linux'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Saif8671',
      category: 'cybersecurity',
    },
    {
      title: 'Intrusion Detection Model',
      description: 'Deep learning model for detecting network intrusions with high accuracy and low false positive rates',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Saif8671',
      category: 'cybersecurity',
    },
    {
      title: 'LLM MODLE',
      description: 'EDA and feature engineering pipeline for security datasets with anomaly handling',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R7m9S4WUQSzqt5L1Vf5vGF7c-Em8V91mxA&s',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Saif8671',
      category: 'Machine Learning',
    },
  ];

  const categories = ['All', 'cybersecurity', 'Machine Learning', 'Dashboard'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className={`py-24 px-6 transition-colors duration-300 ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Projects & Work
          </h2>
          <p
            className={`text-lg mb-8 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Security analytics, machine learning, and cybersecurity projects
          </p>
          <a
            href="https://github.com/Saif8671"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 mb-8"
          >
            View GitHub Portfolio →
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : darkMode
                    ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full transition-colors duration-300 ${
                        darkMode
                          ? 'bg-slate-800 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
