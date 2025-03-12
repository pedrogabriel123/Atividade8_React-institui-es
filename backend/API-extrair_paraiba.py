import csv
import json

def extrair_paraiba(caminho_csv, caminho_json):
    linhas_paraiba = []
    colunas_desejadas = [
        'NO_REGIAO', 
        'NO_UF', 
        'NO_MUNICIPIO', 
        'NO_MESORREGIAO', 
        'NO_MICRORREGIAO', 
        'NO_ENTIDADE', 
        'QT_MAT_BAS'
    ]

    # Abre o CSV com ponto e vírgula como separador
    with open(caminho_csv, mode='r', encoding='ISO-8859-1', newline='') as csvfile:
        leitor = csv.DictReader(csvfile, delimiter=';')

        # Percorre cada linha do CSV
        for linha in leitor:
            # Filtra pela sigla de UF
            if linha["SG_UF"] == "PB":
                # Cria um novo dicionário com somente as colunas desejadas
                linha_filtrada = {coluna: linha[coluna] for coluna in colunas_desejadas}
                linhas_paraiba.append(linha_filtrada)

    # Salva as linhas filtradas num arquivo JSON
    with open(caminho_json, mode='w', encoding='utf-8') as jsonfile:
        json.dump(linhas_paraiba, jsonfile, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    caminho_csv = "microdados_ed_basica_2023.csv"

    caminho_json = "dados_paraiba.json"

    extrair_paraiba(caminho_csv, caminho_json)
    print(f"Arquivo '{caminho_json}' criado com sucesso!")
